define(['jquery'], function (jQuery) {
	var $ = jQuery;

	$.fn.beta = function() {
	    return this.append('<p>Beta is Go!</p>');
	};
});
