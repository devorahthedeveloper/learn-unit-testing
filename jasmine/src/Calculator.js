var Calculator = function(displayElement){
	this.$el = $(displayElement);
};

Calculator.prototype.hideResult = function(callback){
	this.$el.fadeOut(1000, callback);
};