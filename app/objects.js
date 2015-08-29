if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		 return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var propArr = new Array();
		for(var i in obj) {
			if(obj.hasOwnProperty(i)) {
			  propArr.push(i + ': ' + obj[i]);
			}
		}
		return propArr;
    }
  };
});
