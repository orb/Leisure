if window? and (!global? or global == window)
  window.global = window
  window.Repl = root = {}
  Parse = window.Parse
else root = exports ? this

lastLine = null
input = null
write = null
envFrame = null
writeOutput = (line)->
  if output?
    output.innerHTML += "<span>#{line}</span>"
    output.lastChild.scrollIntoView()

getHtml = (x)-> x ->(value)->value()

escapeHtml = (str)->
  if typeof str == 'string' then str.replace /[<>]/g, (c)->
    switch c
      when '<' then '&lt;'
      when '>' then '&gt;'
  else str

trimEq = (str)-> if str[0] == '=' then str.substring(1) else str

init = (inputField, output)->
  clearEnv()
  Prim.defaultEnv.presentValue = presentValue
  #write = (line)-> defs.innerHTML += line
  write = (line)->
  #ReplCore.setWriter writeOutput
  #ReplCore.setNext -> input.value = ''
  ReplCore.setHandler (ast, result, a, c, r, src, env, next)->
    global.$0 = result
    if !ast.leisureName? and result?
      env.processResult?(result, ast)
      #handle SVG nodes here (measure them and create an SVG element)
      env.write "<span><b> #{escapeHtml(trimEq(src))} \u2192</b>\n  #{ReplCore.getType result}: #{env.presentValue result}</span>\n"
    else if ast.err and env.processError? then env.processError ast
    ReplCore.processResult result, env, next
  ReplCore.setResetFunc clearEnv
  #input = inputField
  #input.onkeypress = (e)->
  #  if (e.charCode || e.keyCode || e.which) == 13 then evalLine(input.value)
  #input.select()

presentValue = (value)->
  switch ReplCore.getType value
    when 'html' , 'svg' then getHtml value
    else escapeHtml Parse.print value

evalLine = (line)->
  lastLine = line.replace(/\\/g, '\u03BB')
  ReplCore.processLine(lastLine)

#reloadEnv = -> envFrame.contentWindow.location.reload()

reloadEnv = ->

clearOutput = ->
  o = document.getElementById('output')
  o.innerHTML = 'Click on <a id="stdDefsLink2" href="javascript:void(getStdDefs())">Standard Functions</a> to see Leisure\'s standard functions.\n\n'
  ReplCore.help()
  o.innerHTML += '\n'

clearEnvX = ->
  env = document.getElementById('env')
  if env? then document.body.removeChild(env)
  newEnv = document.createElement('iframe')
  newEnv.id = 'env'
  newEnv.setAttribute("style", "display: none")
  newEnv.setAttribute("onload", "Repl.useIframe(this)")
  document.body.appendChild(newEnv)

clearEnv = ->

useMainWindow = ->
  Leisure.setEvalFunc window, eval

useIframe = (envFr)->
  if (envFr)
    root.envFrame = envFrame = envFr
    env = envFrame.contentWindow
    env[i] = v for i, v of leisureFuncs
    Leisure.setEvalFunc env, env.eval
    macs = {}
    for k, v of macros
      macs[k] = v
    env[i] = v for i, v of {Leisure: Leisure, ReplCore: ReplCore, Repl: Repl, leisureFuncs: {}, macros: macs}
    env.eval """
global = window;
#{ReplCore.prelude}
(function(){
var lll;

  global.leisureGetFuncs = function leisureGetFuncs() {
    return lll
  }
  global.leisureSetFuncs = function leisureSetFuncs(funcs) {
    lll = funcs
  }
  global.leisureAddFunc = function leisureAddFunc(func) {
    lll = Leisure.cons(func, lll)
  }
})()
"""
    env.leisureSetFuncs(leisureFuncNames)
    #clearOutput()

markupDef = (src, ast)->
  if src.match /^\s*#/ then src
  if (match = src.match Leisure.linePat)
    [matched, leading, name, defType] = match
    "<div><b>#{name}</b> #{defType} #{src.substring(matched.length)}</div>"
  else line

markupLines = (lines)-> lines.split('\n').map(markupDef).join('<br>')

handleFiles = (fileElement)->
  files = fileElement.files
  reader = new FileReader()
  reader.onerror = (evt)->
    window.e = evt
    alert('error' + evt)
    fileElement.value = null
  reader.onload = ->
    code = ReplCore.generateCode(files[0], reader.result, false, true)
    eval(code)
    fileElement.value = null
  reader.readAsText(files[0])
  input.select()

processResult = (result, next)->
  writeOutput("#{ReplCore.getType result}: #{escape(Parse.print(result))}\n")
  ReplCore.processResult result, null, next

root.init = init
root.markupDef = markupDef
root.markupLines = markupLines
root.handleFiles = handleFiles
root.useIframe = useIframe
root.reloadEnv = reloadEnv
root.clearEnv = clearEnv
root.evalLine = evalLine
root.processResult = processResult
root.escapeHtml = escapeHtml
root.presentValue = presentValue
