$(document).ready(function() {
	// Javascript code for comments (from Facebook SDK)
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=621121534641370";
		fjs.parentNode.insertBefore(js, fjs);
	}
	(document, 'script', 'facebook-jssdk'));

	// // Javascript code for the share button (from Facebook SDK)
	// (function(d, s, id) {
	//   var js, fjs = d.getElementsByTagName(s)[0];
	//   if (d.getElementById(id)) return;
	//   js = d.createElement(s); js.id = id;
	//   js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=621121534641370";
	//   fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'));

	// // Javascript code for tweet button to work
	// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	// // Javascript code for the Google+ share button to work
	// (function() {
	//   var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	//   po.src = 'https://apis.google.com/js/platform.js';
	//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	// })();

	new Share('.socialbuttons', {
		ui: {
			button_background: 'rgb(68,97,159)',
			button_color: 'rgb(255,255,255)'
		},
		networks: {
			facebook: {
				app_id: 'abc123'
			}
		}
	});
});
