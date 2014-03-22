/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

var pageTitle = 'Rukmal\'s Blog : '; // This variable controls all titles
var firstName = 'Rukmal'; // These variables control all page level names
var lastName = firstName + ' Weerawarana';

exports.index = function(req, res){
    res.render('index',{
        title: pageTitle + 'Home',
        name: firstName
    });
};
