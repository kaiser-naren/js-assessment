if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		return (num & (1 << bit-1)) ? 1 : 0;
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		var binStr = "";
		var count=0;
		while(num > 0) {
			binStr = (num % 2) + '' + binStr;
			num =  parseInt(num / 2);
			count++;
		}
		while(count < 8) {
			binStr = '0' + binStr;
			count++;
		}
			
		return binStr;
    },

    multiply: function(a, b) {
		var getDecimalCount = function(n) {
			var sNum = n + '';
			var i = sNum.indexOf('.');
			return (i === -1) ? 0 : sNum.length - i;
		};
		var decimalCount = getDecimalCount(a) + getDecimalCount(b);
		return parseFloat((a * b).toFixed(decimalCount));
    }
  };
});

