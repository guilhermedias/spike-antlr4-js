var antlr4 = require('antlr4');
var GrammarLexer = require('./antlr/GrammarLexer');
var GrammarParser = require('./antlr/GrammarParser');
var JavaScriptGenerator = require('./generator/JavaScriptGenerator');

var input = 'rotina somaUm recebe (número original) retorna número { }';

var chars = new antlr4.InputStream(input);
var lexer = new GrammarLexer.GrammarLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);

var parser = new GrammarParser.GrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.functionDef();

var jsGenerator = new JavaScriptGenerator.JavaScriptGenerator();
var output = jsGenerator.visitFunctionDef(tree);

console.log(output);

