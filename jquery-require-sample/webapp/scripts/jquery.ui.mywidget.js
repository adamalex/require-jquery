define(['jquery-ui'], function() {
	$.widget("ui.mywidget", {
		_create: function() {
			this.element.append('<p>jQuery UI is Go!</p>');
		}
	});
});