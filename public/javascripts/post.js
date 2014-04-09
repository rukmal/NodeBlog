$(document).ready(function() {
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
