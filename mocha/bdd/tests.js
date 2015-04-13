/* --------------- BDD style --------------- */
describe('Numbers', function(){

	before(function(){ // gets called before any tests are run. called once
		console.log('before');
	});

	after(function(){ // gets called after all tests are run. called once
		console.log('after');
	});

	beforeEach(function(){
		console.log('setup');
	});

	afterEach(function(){
		console.log('teardown');
	});

	describe('comparison', function(){

		it('should recognize two identical integers', function(){
			expect(2).to.equal(2);
		});

		it('should recognize two non-identical integers', function(){
			expect(2).to.not.equal(1);
		});

		it('should detect a non-integer');

	});

});

// to modify timeout length globally:
// mocha.setup({timeout: 3000});

describe('Async', function(){

	// to modify timeout length just for this describe block
	this.timeout(3000);

	it('should be asynchronous', function(done){
		setTimeout(function(){
			expect(1).to.equal(1);
			done();
		}, 2500);
	});

});