/*
-------------------------------
Assertions:
-------------------------------
(message argument is optional)

* ok(state, message)
* equal(actual, expected, message)
* notEqual(actual, expected, message)
* deepEqual(actual, expected, message)
* notDeepEqual(actual, expected, message)
* strictEqual(actual, expected, message) // this should be our default equals assertion
* notStrictEqual(actual, expected, message)
* raises(actual, expected, message)

*/

QUnit.module('module1');

QUnit.test('my first test', function(assert){
	assert.ok(true);
});

QUnit.module('DOM module 1', {
	setup: function() {
		// runs before each test in this module
		$('#testElement').text('yahoo');
	},
	teardown: function() {
		// runs after each test in this module
	}
});

QUnit.test('DOM test 1 - yahoo', function(assert){
	assert.strictEqual( $('#testElement').length, 1 );
	assert.strictEqual( $('#testElement').text(), 'yahoo' );
});

QUnit.module('DOM module 2', {
	setup: function() {
		// runs before each test in this module
		$('#testElement').text('chocolate milk');
	},
	teardown: function() {
		// runs after each test in this module
	}
});

QUnit.test('DOM test 2 - chocolate milk', function(assert){
	assert.strictEqual( $('#testElement').text(), 'chocolate milk' );
});


QUnit.module('asynchronous module');

// QUnit.test('async broken', function(){
// 	setTimeout(function(){
// 		ok(true);
// 	}, 100);
// });

QUnit.test('async timing 1', function(assert){
	QUnit.stop(); // causes QUnit to pause running of this test
	setTimeout(function(){
		assert.ok(true);
		QUnit.start(); // tells QUnit to resume running this test
	}, 100);
});

QUnit.test('async timing 2 - multiple timeouts', function(assert){
	QUnit.stop(2); // tells QUnit to wait for two starts before it runs the test
	setTimeout(function(){
		assert.ok(true);
		console.log('longer timeout finished');
		QUnit.start(); // tells QUnit to resume running this test
	}, 2000);

	setTimeout(function(){
		assert.ok(true);
		QUnit.start(); // tells QUnit to resume running this test
	}, 100);
});

QUnit.asyncTest('better async timing', function(assert){
	setTimeout(function(){
		assert.ok(true);
		QUnit.start(); // tells QUnit to resume running this test
	}, 100);
});

QUnit.module('tidbits');

QUnit.test('checks for a global variable', function(assert){
	// globalVar = 3;
	var globalVar = 3;
	assert.strictEqual(3, globalVar);
});

QUnit.test('checks for an uncaught exception', function(assert){
	var doSomething = function(){throw "aaaah";};
	//doSomething();
	assert.ok(true);
});

QUnit.test('expects certain number of asserts', function(assert){
	QUnit.expect(3);
	assert.ok(true);
	assert.ok(true);
	assert.ok(true);
});


QUnit.test('expects certain number of asserts, pass in number as argument', 3, function(assert){
	assert.ok(true);
	assert.ok(true);
	assert.ok(true);
});

/*
QUnit events:
Log
testStart
testDone
moduleStart
moduleDone
Begin
done

For example...
*/

QUnit.moduleDone(function( details ) {
  console.log( "Finished running: ", details.name, "Failed/total: ", details.failed, details.total );
});


