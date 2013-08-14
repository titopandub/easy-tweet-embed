jQuery(document).ready(function(){
	// Must be put on outside WordPress Admin
	// Outbound Link Tracking with Google Analytics
	// Requires jQuery 1.7 or higher (use .live if using a lower version)
	jQuery("a.embedtweet").on('click',function(e){
		// var url = jQuery(this).attr("href");
		// if (e.currentTarget.host != window.location.host) {
		// 	_gaq.push(['_trackEvent', 'Easy Embed Tweet', e.currentTarget.host, url, 0]);
		// 	if (e.metaKey || e.ctrlKey) {
		// 		var newtab = true;
		// 	}
		// 	if (!newtab) {
		// 		e.preventDefault();
		// 		setTimeout('document.location = "' + url + '"', 100);
		// 	}
		// }
		// e.preventDefault();
		// console.log("test");
		// Just in case, be safe and don't do anything
		if (typeof _gaq == 'undefined') {
			return;
		}
		
		// Stop our browser-based redirect, we'll do that in a minute
		e.preventDefault();
		
		var link = jQuery(this);
		var href = link.attr('href');
		var noProtocol = href.replace(/http[s]?:\/\//, '');
		
		// Track the event
		_gaq.push(['_trackEvent', 'Easy Embed Tweet', href, href, 0]);
 
		// Opening in a new window?
		if (link.attr('target') == '_blank') {
			/* If we are opening a new window, go ahead and open it now
			instead of in a setTimeout callback, so that popup blockers
			don't block it. */
			window.open(href);
		}
		else {
			/* If we're opening in the same window, we need to delay 
			for a brief moment to ensure the _trackEvent has had time
			to fire */
			setTimeout('document.location = "' + href + '";', 100);
		}
	});
});