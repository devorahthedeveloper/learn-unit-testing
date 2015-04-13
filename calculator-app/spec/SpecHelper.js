beforeEach(function () {
  jasmine.addMatchers({
    
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    },

    // example taken from http://pivotallabs.com/writing-beautiful-specs-jasmine-custom-matchers/
    toBeDeactivated: function() {
      return {
        compare: function(account){
          var accountStatusCode = account.get('status').statusCode;
          var result = { pass: accountStatusCode === 5 };
          if(result.pass) {
            result.message =  "Expected account with status code '" + accountStatusCode + " NOT to be deactivated.";
          } else {
            result.message =  "Expected account with status code '" + accountStatusCode + "' to be deactivated.";
          }
          return result;
        }
      }
    },

    toBeBetween: function() {
      return {
        compare: function(actual, expectedMin, expectedMax){
          var result = { pass: actual >= expectedMin && actual <= expectedMax };
          result.message =  "Expected " + actual + " to be between " + expectedMin + " and " + expectedMax;
          
          return result;
        }
      }
    }

  });
});



