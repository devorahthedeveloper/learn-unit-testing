
describe('Number', function(){
  it('should be greater than 5', function(){
	expect(6).toBeGreaterThan(5);
  });
});

describe("Object", function() {
	var foo;

	beforeEach(function() {
		foods = {
			entree: 'chicken',
			soup: 'mushroom barley',
			dessert: "chocolate cake"
		};
	});

	it("contains chocolate cake dessert", function() {
		expect(foods).toEqual(jasmine.objectContaining({dessert: "chocolate cake"}));
	});

	it("does not contain apple pie", function() {
		expect(foods).not.toEqual(jasmine.objectContaining({dessert: 'apple pie'}));
	});
});

describe('Devorah', function(){

	var dee;

	beforeEach(function(){
		dee = new Devorah(100);
	});
	
	it('should be able to gain 5 pounds', function(){
		expect( dee.gainWeight(5) ).toBe(105);
	});

	it('should be able to lose 5 pounds', function(){
		expect( dee.loseWeight(5) ).toBe(95);
	});

	it('should be able to maintain a healthy weight', function(){
		expect ( dee.gainWeight(3) ).toBeBetween(100, 105);
	});

	it('should be an object', function(){
		expect(dee).toEqual(jasmine.any(Object)); // not 100% clear on what this does
	});
});

// this should be testing DOM manipulation. not working. Try jasmine-jquery
describe('Devorah Doll', function(){
	var doll;
	var dollElement = $('#dollFixture');

	beforeEach(function(){
		doll = new DevorahDoll( dollElement );
	});

	xit('should be able to add a message to the DOM', function(){
		doll.setMessage('whirrr');
		expect( dollElement.text() ).toBe('whirrr');
	});
});

describe('Asynchronous code', function(){
	/*
		runs()
		waitsFor()
		Clock.useMock() / for testing setInterval and setTimeout
	*/
});

