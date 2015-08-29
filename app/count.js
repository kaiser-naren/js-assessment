if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
		var counter = start;
		var step = function() {
			console.log(counter++);
			if(counter > end) {
			  clearInterval(interval);
			}
		};
		var interval = setInterval(step, 100);
		step();
		return {
			cancel: function() {
			  clearInterval(interval);
			}
		};
    }
  };
});