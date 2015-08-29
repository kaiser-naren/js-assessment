if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
	 
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var total = 0;
		for(var i = 0 ; i < arr.length ; i++) {
			total += arr[i];
		}
		return total;
    },

    remove : function(arr, item) {
		var newArr = new Array();
		for(var i = 0 ; i < arr.length ; i++) {
			if(arr[i] !== item) {
				newArr.push(arr[i]);
			}
		}
		return newArr;
    },

    removeWithoutCopy : function(arr, item) {
		
		for(var i = arr.length - 1 ; i >= 0 ; i--) {
			if(arr[i] === item) {
				arr.splice(i, 1);
			}
		}
		
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.splice(0, 0, item);
		return arr;
    },

    curtail : function(arr) {
		return arr.slice(1);
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var totalCount = 0;
		for(var i = 0 ; i < arr.length ; i++){
			if(arr[i] === item) {
				totalCount++;
			}
		}
		return totalCount;
    },

    duplicates : function(arr) {
		var dupeArray = [];
		for(var i = 0 ; i < arr.length ; i++) {
			if(arr.indexOf(arr[i]) < i && dupeArray.indexOf(arr[i]) === -1) {
				dupeArray.push(arr[i]);
			}
		}
		return dupeArray;
    },

    square : function(arr) {
		for(var i = 0 ; i < arr.length ; i++) {
			arr[i] *= arr[i];
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var indexes = new Array();
		for(var i = 0 ; i < arr.length ; i++) {
			if(arr[i] === target) {
				indexes.push(i);
			}
		}
		return indexes;
    }
  };
});
