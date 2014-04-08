/*
 * @author Rukmal Weerawarana
 *
 * @description Javascript functions and FullPageJS api implementation for the index page.
 */

'use strict'

$(document).ready(function () {
	$.fn.fullpage({
		scrollingSpeed: 500,
		slidesColor: ['rgba(172, 171, 171, 0.38)', '#c9c0bc'],
		anchors: ['home', 'recents'],
	});

	// Code for Facebook login button (from SDK)
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=621121534641370";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
});
