// NOTES



describe()
it()
beforeEach()
afterEach()
beforeAll()
afterAll()
// --------------
// describe block
describe('name of describe block', function(){
  // tests
});
// --------------
// nested describe block
// nesting should create a complete "sentence" or thought when you chain all the describe blocks together
// This test would be called: Should have a blank user name
// contatenating the describe blocks results in: User, when new, should have a blank user name
// creates a form of documentation
describe('User', function(){
  describe('when new', function(){
    // tests
  });
});
// --------------
// this is an actual test container. must be nested within a describe function
// it()
// --------------
//setup and teardown example
describe('User', function(){
  var codeToTest;
  beforeEach(function(){
    // codeToTest = new MyModule();
  });
  afterEach(function(){
    // cleanup code
  });

  it('should be able to play a song', function(){
    // code and assertions go here
  });
}
// --------------
// matchers (correlate to expectations in qunit)
// can create a built in matcher or a custom matcher
// comprehensive (and up to date!) list here: https://github.com/JamieMason/Jasmine-Matchers
expect(x).toEqual(y); // checks whether two complex structures are equivalent
expect(x).toBe(y);    // strict equality comparison (===)
expect(x).toMatch(pattern); // regex
expect(x).toBeDefined(y);  // compares against undefined
expect(x).toBeUndefined(y);  // compares against undefined
expect(x).toBeNull(y);  //compares against null
expect(x).toBeTruthy(y);  // compares against any truthy value
expect(x).toBeFalsy(y); // compares against any falsy value
expect(x).toContain(y); // finding items in an array
expect(x).toBeLessThan(y);  // <
expect(x).toBeGreaterThan(y); // >
expect( function(){fn();} ).toThrow( ex );  // pass a callback function, expect it to throw a particular exception

// Negating a matcher:
expect(x).not.toBeTruthy();
expect(x).not.toThrow();

// custom matchers (typically created in a beforeEach function)
beforeEach(function(){
  jasmine.addMatchers({
    // should return a boolean
    toBeFive: function(){ 
      this.message = function(){
        return this.actual + " is not 5";
      };
      return this.actual < 5; // actual: contains the actual value you're comparing against
    }
  });
});

// --------------
// disabling a test - put an "x" in front
// this test will not run. Can also be added at the describe level
xit('testname', function(){
	expect(a).toBe(1);
});

// --------------
// Integrating Jasmine with DOM
// requires additional setup and teardown














