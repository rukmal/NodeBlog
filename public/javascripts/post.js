$(document).ready(function() {
	new Share('.socialbuttons', {
		ui: {
			button_background: 'rgb(68,97,159)',
			button_color: 'rgb(255,255,255)'
		},
		networks: {
			facebook: {
				enabled: true,
				load_sdk: false
			},
			twitter: {
				enabled: true
			},
			google_plus: {
				enabled: true
			}
		}
	});

	/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
	var disqus_developer = 1;
	var disqus_shortname = 'nodeblogdemo'; // required: replace example with your forum shortname

	/* * * DON'T EDIT BELOW THIS LINE * * */
	(function() {
		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
});