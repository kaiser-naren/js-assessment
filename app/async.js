if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		return {
			then: function(onReturn) {
				onReturn(value);
			}
		};
    },

    manipulateRemoteData : function(url) {
		var onReturn = null;
		  $.getJSON(url, function(data) {
			var pplArray = new Array();
			for(var i = 0 ; i < data.people.length ; i++) {
			  pplArray.push(data.people[i].name);
			}
			pplArray.sort();
			if(onReturn !== null) {
			  onReturn(pplArray);
			}
		  });
		  return {
			then: function(cb) {
			  onReturn = cb;
			}
		  };
    }
  };
});
