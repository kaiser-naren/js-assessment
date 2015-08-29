if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var fileList = new Array();
		if(data.dir === dirName) {
			dirName = undefined;
		}
		for(var i in data.files) {
			var file = data.files[i];
			// if file is directory then recurse, else add file to the list
			if(typeof file === 'object') {
			  fileList = fileList.concat(this.listFiles(file, dirName));
			} else if(dirName === undefined) {
			  fileList.push(file);
			}
		}
		return fileList;
    },

    permute: function(arr) {
		//base case - return array if it has one element
		if(arr.length === 1) {
			return arr;
		}
		var permArr = new Array();
		for(var i = 0 ; i < arr.length ; i++) {
			//copy array to create sub arrays
			var subArr = arr.slice();
			subArr.splice(i, 1); //remove one element (k)
			// get permutations of sub array
			var subPermArr = this.permute(subArr);
			// add the removed element k to all permutations of the sub array
			for(var j = 0 ; j < subPermArr.length ; j++) {
			  permArr.push([arr[i]].concat(subPermArr[j]));
			}
		}
		return permArr;
	}
  };
});
