/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

var pageTitle = 'Rukmal\'s Blog : ';

exports.index = function(req, res){
    res.render('index',{
        title: pageTitle + 'Home'
    });
};
