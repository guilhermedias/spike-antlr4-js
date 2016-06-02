// Generated from Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\rO\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0005\n@\n\n\u0003\u000b\u0003\u000b",
    "\u0007\u000bD\n\u000b\f\u000b\u000e\u000bG\u000b\u000b\u0003\f\u0006",
    "\fJ\n\f\r\f\u000e\fK\u0003\f\u0003\f\u0002\u0002\r\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0003\u0002\u0004\u0004\u0002C\\c|\u0004\u0002\u000b",
    "\f\"\"P\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003\u0002",
    "\u0002\u0002\u0005\u001b\u0003\u0002\u0002\u0002\u0007\u001d\u0003\u0002",
    "\u0002\u0002\t\u001f\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002",
    "\u0002\r(\u0003\u0002\u0002\u0002\u000f/\u0003\u0002\u0002\u0002\u0011",
    "7\u0003\u0002\u0002\u0002\u0013?\u0003\u0002\u0002\u0002\u0015A\u0003",
    "\u0002\u0002\u0002\u0017I\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "*\u0002\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "+\u0002\u0002\u001c\u0006\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    "}\u0002\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f \u0007\u007f\u0002",
    "\u0002 \n\u0003\u0002\u0002\u0002!\"\u0007p\u0002\u0002\"#\u0007\u00fc",
    "\u0002\u0002#$\u0007o\u0002\u0002$%\u0007g\u0002\u0002%&\u0007t\u0002",
    "\u0002&\'\u0007q\u0002\u0002\'\f\u0003\u0002\u0002\u0002()\u0007t\u0002",
    "\u0002)*\u0007g\u0002\u0002*+\u0007e\u0002\u0002+,\u0007g\u0002\u0002",
    ",-\u0007d\u0002\u0002-.\u0007g\u0002\u0002.\u000e\u0003\u0002\u0002",
    "\u0002/0\u0007t\u0002\u000201\u0007g\u0002\u000212\u0007v\u0002\u0002",
    "23\u0007q\u0002\u000234\u0007t\u0002\u000245\u0007p\u0002\u000256\u0007",
    "c\u0002\u00026\u0010\u0003\u0002\u0002\u000278\u0007t\u0002\u000289",
    "\u0007q\u0002\u00029:\u0007v\u0002\u0002:;\u0007k\u0002\u0002;<\u0007",
    "p\u0002\u0002<=\u0007c\u0002\u0002=\u0012\u0003\u0002\u0002\u0002>@",
    "\t\u0002\u0002\u0002?>\u0003\u0002\u0002\u0002@\u0014\u0003\u0002\u0002",
    "\u0002AE\u0005\u0013\n\u0002BD\u0005\u0013\n\u0002CB\u0003\u0002\u0002",
    "\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002F\u0016\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "HJ\t\u0003\u0002\u0002IH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002MN\b\f\u0002\u0002N\u0018\u0003\u0002\u0002\u0002\u0006",
    "\u0002?EK\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function GrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

GrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
GrammarLexer.prototype.constructor = GrammarLexer;

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.PAR_L = 1;
GrammarLexer.PAR_R = 2;
GrammarLexer.CURLY_BRACE_L = 3;
GrammarLexer.CURLY_BRACE_R = 4;
GrammarLexer.TYPE_NUM = 5;
GrammarLexer.RECEIVES_KW = 6;
GrammarLexer.RETURNS_KW = 7;
GrammarLexer.ROUTINE_KW = 8;
GrammarLexer.LETTER = 9;
GrammarLexer.ID = 10;
GrammarLexer.WHITESPACE = 11;


GrammarLexer.modeNames = [ "DEFAULT_MODE" ];

GrammarLexer.literalNames = [ null, "'('", "')'", "'{'", "'}'", "'número'", 
                              "'recebe'", "'retorna'", "'rotina'" ];

GrammarLexer.symbolicNames = [ null, "PAR_L", "PAR_R", "CURLY_BRACE_L", 
                               "CURLY_BRACE_R", "TYPE_NUM", "RECEIVES_KW", 
                               "RETURNS_KW", "ROUTINE_KW", "LETTER", "ID", 
                               "WHITESPACE" ];

GrammarLexer.ruleNames = [ "PAR_L", "PAR_R", "CURLY_BRACE_L", "CURLY_BRACE_R", 
                           "TYPE_NUM", "RECEIVES_KW", "RETURNS_KW", "ROUTINE_KW", 
                           "LETTER", "ID", "WHITESPACE" ];

GrammarLexer.grammarFileName = "Grammar.g4";



exports.GrammarLexer = GrammarLexer;

