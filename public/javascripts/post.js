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
