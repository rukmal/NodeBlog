/*
 * @author Rukmal Weerawarana
 *
 * @description Facebook SDK for Javascript authentication and initiation
 */

$(document).ready(function() {
    $.ajaxSetup({ cache: true });

    $.getScript('http://connect.facebook.net/en_UK/all.js', function() {
        FB.init({
            appId: '621121534641370', // <-- YOUR APP ID GOES HERE.
        });
        FB.getLoginStatus(function(response) {
        });
    });
});
