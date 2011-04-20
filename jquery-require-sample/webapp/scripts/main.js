//Configure RequireJS
require({
    //Load jQuery before any other scripts, since jQuery plugins normally
    //assume jQuery is already loaded in the page.
    priority: ['jquery'],
	paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min",
		"jquery-ui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/jquery-ui.min"
    }
});

//Load scripts.
require(["jquery", "jquery.alpha", "jquery.beta", "jquery.ui.mywidget"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta().mywidget();
    });
});
