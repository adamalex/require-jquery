define(['jquery'], function (jQuery) {
	var $ = jQuery;

	$.fn.alpha = function() {
	    return this.append('<p>Alpha is Go!</p>');
	};
});