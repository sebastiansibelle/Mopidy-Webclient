$(document).bind("mobileinit", function() {
	$.extend($.mobile, {
		ajaxEnabled : false,
		hashListeningEnabled : false,
		//                    linkBindingEnabled: false
		//                  buttonMarkup.hoverDelay: 100,
		//                  buttonMarkup.corners: false
	});
});
window.addEventListener('load', function() {
	new FastClick(document.body);
}, false);