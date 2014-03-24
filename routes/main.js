/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

var firstName = 'John'; // These variables control all page level names
var lastName = 'Appleseed';
var fullName = firstName + lastName;
var pageTitle = firstName + '\'s Blog : ';

exports.index = function(req, res){
    res.render('index',{
        title: pageTitle + 'Home',
        name: firstName
    });
};
