
describe('Calculator', function(){

	var calc;

	beforeEach(function(){
		calc = new Calculator(100);
	});
	
	describe('add', function(){
		it('should return the sum of both operands', function(){
			expect(calc.add(2,3)).toBe(5);
		});

		it('should return the sum of all operands provided', function(){
			expect(calc.add(1,1,5)).toBe(7);
		});

		it('should return the operand unchanged if only one operand is provided', function(){
			expect(calc.add(2)).toBe(2);
		});

		it('should return NaN if a non-number is provided', function(){
			expect(calc.add('string')).toBeNaN();
		});

		it('should return NaN if multiple non-numbers are provided', function(){
			expect(calc.add('string', {}, [], function(){})).toBeNaN();
		});
	});

	describe('subtract', function(){
		it('should return the difference between both operands', function(){
			expect(calc.subtract(2,3)).toBe(-1);
		});
	});

	describe('divide', function(){
		it('should return division of both operands', function(){
			expect(calc.divide(3,3)).toBe(1);
		});
	});

});



