// Generated from Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\r\u0011\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002\u0002\u000f\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\u0007",
    "\n\u0002\u0002\u0005\u0006\u0007\f\u0002\u0002\u0006\u0007\u0007\b\u0002",
    "\u0002\u0007\b\u0007\u0003\u0002\u0002\b\t\u0007\u0007\u0002\u0002\t",
    "\n\u0007\f\u0002\u0002\n\u000b\u0007\u0004\u0002\u0002\u000b\f\u0007",
    "\t\u0002\u0002\f\r\u0007\u0007\u0002\u0002\r\u000e\u0007\u0005\u0002",
    "\u0002\u000e\u000f\u0007\u0006\u0002\u0002\u000f\u0003\u0003\u0002\u0002",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'", "'número'", "'recebe'", 
                     "'retorna'", "'rotina'" ];

var symbolicNames = [ null, "PAR_L", "PAR_R", "CURLY_BRACE_L", "CURLY_BRACE_R", 
                      "TYPE_NUM", "RECEIVES_KW", "RETURNS_KW", "ROUTINE_KW", 
                      "LETTER", "ID", "WHITESPACE" ];

var ruleNames =  [ "functionDef" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.PAR_L = 1;
GrammarParser.PAR_R = 2;
GrammarParser.CURLY_BRACE_L = 3;
GrammarParser.CURLY_BRACE_R = 4;
GrammarParser.TYPE_NUM = 5;
GrammarParser.RECEIVES_KW = 6;
GrammarParser.RETURNS_KW = 7;
GrammarParser.ROUTINE_KW = 8;
GrammarParser.LETTER = 9;
GrammarParser.ID = 10;
GrammarParser.WHITESPACE = 11;

GrammarParser.RULE_functionDef = 0;

function FunctionDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_functionDef;
    return this;
}

FunctionDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefContext.prototype.constructor = FunctionDefContext;

FunctionDefContext.prototype.ROUTINE_KW = function() {
    return this.getToken(GrammarParser.ROUTINE_KW, 0);
};

FunctionDefContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.ID);
    } else {
        return this.getToken(GrammarParser.ID, i);
    }
};


FunctionDefContext.prototype.RECEIVES_KW = function() {
    return this.getToken(GrammarParser.RECEIVES_KW, 0);
};

FunctionDefContext.prototype.PAR_L = function() {
    return this.getToken(GrammarParser.PAR_L, 0);
};

FunctionDefContext.prototype.TYPE_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.TYPE_NUM);
    } else {
        return this.getToken(GrammarParser.TYPE_NUM, i);
    }
};


FunctionDefContext.prototype.PAR_R = function() {
    return this.getToken(GrammarParser.PAR_R, 0);
};

FunctionDefContext.prototype.RETURNS_KW = function() {
    return this.getToken(GrammarParser.RETURNS_KW, 0);
};

FunctionDefContext.prototype.CURLY_BRACE_L = function() {
    return this.getToken(GrammarParser.CURLY_BRACE_L, 0);
};

FunctionDefContext.prototype.CURLY_BRACE_R = function() {
    return this.getToken(GrammarParser.CURLY_BRACE_R, 0);
};

FunctionDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFunctionDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.FunctionDefContext = FunctionDefContext;

GrammarParser.prototype.functionDef = function() {

    var localctx = new FunctionDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_functionDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(GrammarParser.ROUTINE_KW);
        this.state = 3;
        this.match(GrammarParser.ID);
        this.state = 4;
        this.match(GrammarParser.RECEIVES_KW);
        this.state = 5;
        this.match(GrammarParser.PAR_L);
        this.state = 6;
        this.match(GrammarParser.TYPE_NUM);
        this.state = 7;
        this.match(GrammarParser.ID);
        this.state = 8;
        this.match(GrammarParser.PAR_R);
        this.state = 9;
        this.match(GrammarParser.RETURNS_KW);
        this.state = 10;
        this.match(GrammarParser.TYPE_NUM);
        this.state = 11;
        this.match(GrammarParser.CURLY_BRACE_L);
        this.state = 12;
        this.match(GrammarParser.CURLY_BRACE_R);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GrammarParser = GrammarParser;
