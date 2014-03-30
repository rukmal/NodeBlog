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

exports.index = function(req, res) {
    res.render('index',{
        title: pageTitle + 'Home',
        name: firstName
    });
};

exports.all_posts = function(req, res) {
    var myCursor = Post.find();
    myCursor.sort({'date': -1});
    myCursor.find(function(err, posts) {
        if (err) {
            console.log(err);
        }
        res.render('all_posts', {
            title: pageTitle + 'All posts',
            posts: posts
        });
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
        description: req.body.post_description,
        photo: req.body.post_photo,
        slug: req.body.post_slug
    });

    post.save(function(err) {
        if (err) {
            res.redirect('/new_post_error');
        }
        res.redirect('/new_post_success');
    });
}


exports.show_post = function(req, res) {
    Post.find({ 'slug': req.params.slug }, function(err, post) {
        if (err) {
            console.log(err);
        }
        res.render('post', { title: post[0].title, post: post[0]})
    });
}
