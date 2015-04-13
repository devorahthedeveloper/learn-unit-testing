/* --------------- BDD style --------------- */
// describe('Numbers', function(){
// 	it('should compare two identical integers', function(){
// 		expect(2).to.equal(2);
// 	});
// });


/* --------------- TDD style --------------- */

suite('my first suite', function(){

	setup(function(){
		console.log('setup');
	});

	teardown(function(){
		console.log('teardown');
	});

	test('simple comparison test', function(){
		expect(2).to.equal(2);
		console.log('test');
	});
});
