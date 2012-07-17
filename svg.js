var svg = (function(){
var root;

if ((typeof window !== 'undefined' && window !== null) && (!(typeof global !== 'undefined' && global !== null) || global === window)) {
  svg = root = {};
  global = window;
} else {
  root = typeof exports !== 'undefined' && exports !== null ? exports : this;
  Parse = require('./parse');
  Leisure = require('./leisure');
  Leisure.req('./prelude');
  Leisure.req('./std');
  require('./prim');
  ReplCore = require('./replCore');
  Repl = require('./repl');
}
root.defs = {};
root.tokenDefs = [];
root.macros = {};

Nil = Parse.Nil;
var cons = Parse.cons;
var setType = Parse.setType;
var setDataType = Parse.setDataType;
var define = Parse.define;
var processResult = Repl.processResult;
var setContext = Leisure.setContext;
var funcContext = Leisure.funcContext;
var define = Parse.define;
var _insertFields, _svgTemplate, _svg, _svgFile, _field, _defaultCircleMap, _defaultRectMap, _defaultLineMap, _defaultEllipseMap, _defaultTextMap, _defaultPolygonMap, _svgNode, _svgNodes, _svgConcat, _svgElement, _svgMeasure, _svgPresent, _circle, _rect, _ellipse, _line, _text, _polygon, _group, _translate, _rotate;
processResult(//AST(require "maps")
(_require()((function(){return "maps"}))));
//insertFields = AST(λmap . if (null? map) "" (concat (cons (field (firstPair map)) (cons (insertFields (restPairs map)) nil))))
root.defs._insertFields = _insertFields = Parse.define('insertFields', (function() {var f; return function _insertFields(){return f || (f = (function(_map){return _if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())((function(){return ""}))((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_field()((function(){var $m; return (function(){return $m || ($m = (_firstPair()(_map)))})})())))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_insertFields()((function(){var $m; return (function(){return $m || ($m = (_restPairs()(_map)))})})())))})})())(_nil)))})})())))})})())))})})());}));}})(), 1, "\\map. if (null? map) ''\n  concat [ (field (firstPair map)), (insertFields (restPairs map)) ]");;
//svgTemplate = AST(λattrs contents . html (concat (cons "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" " (cons attrs (cons ">" (cons contents (cons "</svg>" nil)))))))
root.defs._svgTemplate = _svgTemplate = Parse.define('svgTemplate', (function() {var f; return function _svgTemplate(){return f || (f = (function(_attrs){return function(_contents){return _html()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" "}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_attrs)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return ">"}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_contents)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</svg>"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})());};}));}})(), 2, "\\attrs. \\contents. html (concat [ '<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" ', attrs, '>', contents, '</svg>'])");;
//svg = AST(λo map . svgTemplate (concat (cons "style=\"width: " (cons (getHashValueDefault "width" 100 map) (cons "; height: " (cons (getHashValueDefault "height" 100 map) (cons "\"" nil)))))) (o id))
root.defs._svg = _svg = Parse.define('svg', (function() {var f; return function _svg(){return f || (f = (function(_o){return function(_map){return _svgTemplate()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "style=\"width: "}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_getHashValueDefault()((function(){return "width"}))((function(){return 100}))(_map)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "; height: "}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_getHashValueDefault()((function(){return "height"}))((function(){return 100}))(_map)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "\""}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())((function(){var $m; return (function(){return $m || ($m = (_o()(_id)))})})());};}));}})(), 2, "\\o. \\map. svgTemplate (concat ['style=\"width: ', (getHashValueDefault 'width' 100 map), '; height: ' , (getHashValueDefault 'height' 100 map), '\"']) (o id)");;
//svgFile = AST(λmap . html (concat (cons "<object xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" " (cons (insertFields map) (cons "</object>" nil)))))
root.defs._svgFile = _svgFile = Parse.define('svgFile', (function() {var f; return function _svgFile(){return f || (f = (function(_map){return _html()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<object xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" "}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_insertFields()(_map)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</object>"}))(_nil)))})})())))})})())))})})())))})})());}));}})(), 1, "\\map. html (concat [ '<object xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" ', (insertFields map), '</object>' ] )");;
//field = AST(λcell . concat (cons (key cell) (cons "=\"" (cons (value cell) (cons "\" " nil)))))
root.defs._field = _field = Parse.define('field', (function() {var f; return function _field(){return f || (f = (function(_cell){return _concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_key()(_cell)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "=\""}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_value()(_cell)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "\" "}))(_nil)))})})())))})})())))})})())))})})());}));}})(), 1, "\\cell. concat [ (key cell), '=\"', (value cell), '\" ' ]");;
//defaultCircleMap = AST(hashFromList (cons "cx" (cons 50 (cons "cy" (cons 50 (cons "r" (cons 40 (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 (cons "fill" (cons "red" nil)))))))))))))
root.defs._defaultCircleMap = _defaultCircleMap = Parse.define('defaultCircleMap', (function _defaultCircleMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "cx"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "cy"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "r"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 40}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "fill"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "red"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'cx', 50, 'cy', 50, 'r', 40, 'stroke', 'black', 'stroke-width', 2, 'fill', 'red' ]");;
//defaultRectMap = AST(hashFromList (cons "x" (cons 1 (cons "y" (cons 1 (cons "width" (cons 50 (cons "height" (cons 50 (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 (cons "fill" (cons "green" nil)))))))))))))))
root.defs._defaultRectMap = _defaultRectMap = Parse.define('defaultRectMap', (function _defaultRectMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "x"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 1}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "y"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 1}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "height"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "fill"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "green"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'x', 1, 'y', 1, 'width', 50, 'height', 50, 'stroke', 'black', 'stroke-width', 2, 'fill', 'green' ]");;
//defaultLineMap = AST(hashFromList (cons "x1" (cons 0 (cons "y1" (cons 0 (cons "x2" (cons 50 (cons "y2" (cons 50 (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 nil)))))))))))))
root.defs._defaultLineMap = _defaultLineMap = Parse.define('defaultLineMap', (function _defaultLineMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "x1"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 0}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "y1"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 0}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "x2"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "y2"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'x1', 0, 'y1', 0, 'x2', 50, 'y2', 50, 'stroke', 'black', 'stroke-width', 2 ]");;
//defaultEllipseMap = AST(hashFromList (cons "cx" (cons 50 (cons "cy" (cons 50 (cons "rx" (cons 40 (cons "ry" (cons 40 (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 (cons "fill" (cons "blue" nil)))))))))))))))
root.defs._defaultEllipseMap = _defaultEllipseMap = Parse.define('defaultEllipseMap', (function _defaultEllipseMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "cx"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "cy"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 50}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "rx"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 40}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "ry"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 40}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "fill"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "blue"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'cx', 50, 'cy', 50, 'rx', 40, 'ry', 40, 'stroke', 'black', 'stroke-width', 2, 'fill', 'blue' ]");;
//defaultTextMap = AST(hashFromList (cons "x" (cons 0 (cons "y" (cons 10 (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 (cons "fill" (cons "black" nil)))))))))))
root.defs._defaultTextMap = _defaultTextMap = Parse.define('defaultTextMap', (function _defaultTextMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "x"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 0}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "y"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 10}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "fill"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'x', 0, 'y', 10, 'stroke', 'black', 'stroke-width', 2, 'fill', 'black' ]");;
//defaultPolygonMap = AST(hashFromList (cons "points" (cons "350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161" (cons "stroke" (cons "black" (cons "stroke-width" (cons 2 (cons "fill" (cons "yellow" nil)))))))))
root.defs._defaultPolygonMap = _defaultPolygonMap = Parse.define('defaultPolygonMap', (function _defaultPolygonMap() {return ((_hashFromList()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "points"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "black"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "stroke-width"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return 2}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "fill"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "yellow"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())));}), 0, "hashFromList [ 'points', '350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161', 'stroke', 'black', 'stroke-width', 2, 'fill', 'yellow' ]");;
//svgNode = AST(λcontents f . f contents)
root.defs._svgNode = _svgNode = Parse.define('svgNode', (function() {var f; return function _svgNode(){return f || (f = (Parse.setDataType(function(_contents){return Parse.setType(function(_f){return _f()(_contents);}, 'svgNode');}, 'svgNode')));}})(), 1, "\\contents. \\f . f contents");;
//svgNodes = AST(λnodeList . nodeList λh t D . cons (h id) (svgNodes t) nil)
root.defs._svgNodes = _svgNodes = Parse.define('svgNodes', (function() {var f; return function _svgNodes(){return f || (f = (function(_nodeList){return _nodeList()((function(){var $m; return (function(){return $m || ($m = (function(_h){return function(_t){return function(_D){return _cons()((function(){var $m; return (function(){return $m || ($m = (_h()(_id)))})})())((function(){var $m; return (function(){return $m || ($m = (_svgNodes()(_t)))})})());};};}))})})())(_nil);}));}})(), 1, "\\nodeList. nodeList (\\h t D . cons (h id) (svgNodes t)) nil");;
//svgConcat = AST(λnodeList . svgNode (concat (svgNodes nodeList)))
root.defs._svgConcat = _svgConcat = Parse.define('svgConcat', (function() {var f; return function _svgConcat(){return f || (f = (function(_nodeList){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_svgNodes()(_nodeList)))})})())))})})());}));}})(), 1, "\\nodeList. svgNode (concat (svgNodes nodeList))");;
//svgElement = AST(λname map . svgNode (concat (cons "<" (cons name (cons " " (cons (insertFields map) (cons "/>" nil)))))))
root.defs._svgElement = _svgElement = Parse.define('svgElement', (function() {var f; return function _svgElement(){return f || (f = (function(_name){return function(_map){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<"}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_name)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return " "}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_insertFields()(_map)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "/>"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})());};}));}})(), 2, "\\name. \\map. svgNode (concat [ '<', name, ' ', (insertFields map), '/>' ])");;
//svgMeasure = AST(λcontent . primSvgMeasure content)
root.defs._svgMeasure = _svgMeasure = Parse.define('svgMeasure', (function() {var f; return function _svgMeasure(){return f || (f = (function(_content){return _primSvgMeasure()(_content);}));}})(), 1, "\\content. primSvgMeasure content");;
//svgPresent = AST(λcontent . svgMeasure content λx y w h . svgTemplate (concat (cons "width='" (cons w (cons "' height='" (cons h (cons "' viewbox='" (cons x (cons " " (cons y (cons " " (cons w (cons " " (cons h (cons "'" nil)))))))))))))) content)
root.defs._svgPresent = _svgPresent = Parse.define('svgPresent', (function() {var f; return function _svgPresent(){return f || (f = (function(_content){return _svgMeasure()(_content)((function(){var $m; return (function(){return $m || ($m = (function(_x){return function(_y){return function(_w){return function(_h){return _svgTemplate()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "width='"}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_w)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "' height='"}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_h)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "' viewbox='"}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_x)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return " "}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_y)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return " "}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_w)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return " "}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_h)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "'"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})())(_content);};};};}))})})());}));}})(), 1, "\\content. svgMeasure content \\x y w h .\n  svgTemplate (concat [\"width='\", w, \"' height='\", h, \"' viewbox='\", x, ' ', y, ' ', w, ' ', h, \"'\"]) content");;
//circle = AST(λmap . svgElement "circle" (if (null? map) defaultCircleMap map))
root.defs._circle = _circle = Parse.define('circle', (function() {var f; return function _circle(){return f || (f = (function(_map){return _svgElement()((function(){return "circle"}))((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultCircleMap)(_map)))})})());}));}})(), 1, "\\map. svgElement 'circle' (if (null? map) defaultCircleMap map)");;
//rect = AST(λmap . svgElement "rect" (if (null? map) defaultRectMap map))
root.defs._rect = _rect = Parse.define('rect', (function() {var f; return function _rect(){return f || (f = (function(_map){return _svgElement()((function(){return "rect"}))((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultRectMap)(_map)))})})());}));}})(), 1, "\\map. svgElement 'rect' (if (null? map) defaultRectMap map)");;
//ellipse = AST(λmap . svgElement "ellipse" (if (null? map) defaultEllipseMap map))
root.defs._ellipse = _ellipse = Parse.define('ellipse', (function() {var f; return function _ellipse(){return f || (f = (function(_map){return _svgElement()((function(){return "ellipse"}))((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultEllipseMap)(_map)))})})());}));}})(), 1, "\\map. svgElement 'ellipse' (if (null? map) defaultEllipseMap map)");;
//line = AST(λmap . svgElement "line" (if (null? map) defaultLineMap map))
root.defs._line = _line = Parse.define('line', (function() {var f; return function _line(){return f || (f = (function(_map){return _svgElement()((function(){return "line"}))((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultLineMap)(_map)))})})());}));}})(), 1, "\\map. svgElement 'line' (if (null? map) defaultLineMap map)");;
//text = AST(λt map . svgNode (concat (cons "<text " (cons (insertFields (if (null? map) defaultTextMap map)) (cons ">" (cons (if (null? t) "undefined" t) (cons "</text>" nil)))))))
root.defs._text = _text = Parse.define('text', (function() {var f; return function _text(){return f || (f = (function(_t){return function(_map){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<text "}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_insertFields()((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultTextMap)(_map)))})})())))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return ">"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_t)))})})())((function(){return "undefined"}))(_t)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</text>"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})());};}));}})(), 2, "\\t. \\map. svgNode (concat [ '<text ', (insertFields (if (null? map) defaultTextMap map)), '>', (if (null? t) 'undefined' t), '</text>' ])");;
//polygon = AST(λmap . svgElement "polygon" (if (null? map) defaultPolygonMap map))
root.defs._polygon = _polygon = Parse.define('polygon', (function() {var f; return function _polygon(){return f || (f = (function(_map){return _svgElement()((function(){return "polygon"}))((function(){var $m; return (function(){return $m || ($m = (_if()((function(){var $m; return (function(){return $m || ($m = (_null$e()(_map)))})})())(_defaultPolygonMap)(_map)))})})());}));}})(), 1, "\\map. svgElement 'polygon' (if (null? map) defaultPolygonMap map)");;
//group = AST(λelem . svgNode (concat (cons "<g>" (cons (elem id) (cons "</g>" nil)))))
root.defs._group = _group = Parse.define('group', (function() {var f; return function _group(){return f || (f = (function(_elem){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<g>"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_elem()(_id)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</g>"}))(_nil)))})})())))})})())))})})())))})})());}));}})(), 1, "\\elem. svgNode (concat [ '<g>', (elem id), '</g>' ])");;
//translate = AST(λelem x y . svgNode (concat (cons "<g transform=\"translate(" (cons x (cons ", " (cons y (cons ")\">" (cons (elem id) (cons "</g>" nil)))))))))
root.defs._translate = _translate = Parse.define('translate', (function() {var f; return function _translate(){return f || (f = (function(_elem){return function(_x){return function(_y){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<g transform=\"translate("}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_x)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return ", "}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_y)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return ")\">"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_elem()(_id)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</g>"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})())))})})())))})})());};};}));}})(), 3, "\\elem. \\x. \\y. svgNode (concat ['<g transform=\"translate(', x, ', ', y, ')\">', (elem id), '</g>' ])");;
//rotate = AST(λelem r . svgNode (concat (cons "<g transform=\"rotate(" (cons r (cons ")\">" (cons (elem id) (cons "</g>" nil)))))))
root.defs._rotate = _rotate = Parse.define('rotate', (function() {var f; return function _rotate(){return f || (f = (function(_elem){return function(_r){return _svgNode()((function(){var $m; return (function(){return $m || ($m = (_concat()((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "<g transform=\"rotate("}))((function(){var $m; return (function(){return $m || ($m = (_cons()(_r)((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return ")\">"}))((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){var $m; return (function(){return $m || ($m = (_elem()(_id)))})})())((function(){var $m; return (function(){return $m || ($m = (_cons()((function(){return "</g>"}))(_nil)))})})())))})})())))})})())))})})())))})})())))})})());};}));}})(), 2, "\\elem. \\r. svgNode (concat ['<g transform=\"rotate(', r, ')\">', (elem id), '</g>' ])");;

//if (typeof window !== 'undefined' && window !== null) {
//  Leisure.processTokenDefs(root.tokenDefs);
//}
return root;
}).call(this)