var GrammarVisitor = require('../antlr/GrammarVisitor');

function JavaScriptGenerator() {
	GrammarVisitor.GrammarVisitor.call(this);
	return this;
}

JavaScriptGenerator.prototype = Object.create(GrammarVisitor.GrammarVisitor.prototype);
JavaScriptGenerator.prototype.constructor = JavaScriptGenerator;

JavaScriptGenerator.prototype.visitFunctionDef = function(ctx) {
  var functionName = ctx.ID(0).getText();
  var paramName = ctx.ID(1).getText();
  return `function ${functionName} (${paramName}) { }`;
};

exports.JavaScriptGenerator = JavaScriptGenerator;
