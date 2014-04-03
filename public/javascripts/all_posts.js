/*
 * @author Rukmal Weerawarana
 *
 * @description jQuery functions for the all posts page.
 */

$(document).ready(function() {
    $('.postlink').mouseenter(function() {
        $(this).animate({color: '#6ab8ec'}, 150);
    });

    $('.postlink').mouseleave(function() {
        $(this).animate({color: 'rgb(51,51,51)'}, 200);
    });
});
