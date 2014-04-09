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
});
