if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
		return fn.apply(obj);
    },

    functionFunction : function(str) {
		return function(str2) {
			return str + ', ' + str2;
		};
    },

    makeClosures : function(arr, fn) {
		var funcArr = new Array();
		var closure = function(num) {
			return function() {
			  return num;
			};
		};
		for(var i = 0 ; i < arr.length ; i++) {
			funcArr.push(closure(arr[i] * arr[i]));
		}
		return funcArr;
    },

    partial : function(fn, str1, str2) {
		return function(str3) {
			return fn(str1, str2, str3);
		};
    },

    useArguments : function() {
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
    },

    callIt : function(fn) {
		fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
		var slice = Array.prototype.slice;
		var args = slice.call(arguments, 1);
		return function() {
			return fn.apply(null, args.concat(slice.call(arguments)));
		};
    },

    curryIt : function(fn) {
		var slice = Array.prototype.slice;
		var args = slice.call(arguments);
		var parentObject = this;
		if(arguments.length === args[0].length + 1) {
			return fn.apply(this, args.slice(1));
		} else {
			return function(param) {
				args = args.concat(slice.call(arguments));
				return parentObject.curryIt.apply(parentObject, args);
			};
		}
    }
  };
});
