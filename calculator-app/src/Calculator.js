// Calculator app 

var Calculator = (function(){
	function Calculator(){
		
		function prepareNumbers(args){
			return "hello";
		}
	}

	
	Calculator.prototype.add = function(){
		var operands = Array.prototype.slice.call(arguments);
		var result = 0;
		var len = operands.length;

		for (var i = 0; i < len; i++) {
			if ( isNaN(operands[i]) ) { return NaN; }
			result += operands[i];
		}

		return result;
	};

	Calculator.prototype.subtract = function(val1, val2){
		return val1 - val2;
	};

	Calculator.prototype.divide = function(val1, val2){
		return val1 / val2;
	};

	return Calculator;
})();