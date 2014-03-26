/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

'use strict'

// Requiring mongoose models
var Post = require('./../models/post');

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

exports.all_posts = function(req, res) {
    res.render('all_posts', {
        title: pageTitle + 'All posts'
    });
};

exports.new_post = function(req, res) {
    res.render('new_post_pages/new_post', {
        title: pageTitle + 'Add new post'
    });
};

exports.new_post_error = function(req, res) {
    res.render('new_post_pages/new_post_error', {
        title: pageTitle + 'Post error'
    });
};

exports.new_post_success = function(req, res) {
    res.render('new_post_pages/new_post_success', {
        title: pageTitle + 'Post successful!'
    });
};

exports.new_post_add = function(req, res) {
    var post = new Post({
        title: req.body.post_title,
        content: req.body.post_content,
        photo: req.body.post_photo,
        slug: req.body.post_slug
    });

    post.save(function(err) {
        console.log(err);
        if (err) {
            res.redirect('/new_post_error');
        } else {
            res.redirect('/new_post_success');
        }
    });
}
