if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
		return (/([a-zA-Z])\1/).test(str);
    },

    endsWithVowel : function(str) {
		return (/[aeiouAEIOU]$/).test(str);
    },

    captureThreeNumbers : function(str) {
		var threeNumMatchArr = str.match(/\d{3}/);
		return (threeNumMatchArr === null) ? false : threeNumMatchArr[0];
    },

    matchesPattern : function(str) {
		return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },
    isUSD : function(str) {
		return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
