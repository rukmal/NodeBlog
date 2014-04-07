/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

'use strict'

// Requiring mongoose models
var Post = require('./../models/post');
// Requiring Github-flavored markdown (to parse posts)
var marked = require('marked');

var firstName = 'John'; // <-- Change all of these
var lastName = 'Appleseed';
var fullName = firstName + ' ' + lastName;
var pageTitle = firstName + '\'s Blog : ';
var description = 'This is a test description. My name isn\'t really John Appleseed. It\'s Rukmal Weerawarana, and if you want to get in touch with me, please do not hesitate to contact me at http://rukmal.me or rukmal.weerawarana@gmail.com.'
var imageLocation = 'images/user_picture.jpg';
var personalSite = 'http://cnn.com/'; // <-- If none, set this to '#'

exports.index = function (req, res) {
    res.render('index',{
        title: pageTitle + 'Home',
        name: firstName
    });
};

exports.all_posts = function (req, res) {
    var myCursor = Post.find();
    myCursor.sort({ 'date': -1 });
    myCursor.find(function(err, posts) {
        if (err) {
            console.log(err);
        }
        res.render('all_posts', {
            personalSite: personalSite,
            fullName: fullName,
            title: pageTitle + 'All posts',
            posts: posts
        });
    });
};

exports.new_post = function (req, res) {
    res.render('new_post_pages/new_post', {
        title: pageTitle + 'Add new post'
    });
};

exports.edit_post = function (req, res) {
	res.render('edit_post', {
		title: pageTitle + 'Edit post',
	})
}

exports.new_post_error = function (req, res) {
    res.render('new_post_pages/new_post_error', {
        title: pageTitle + 'Post error'
    });
};

exports.new_post_success = function (req, res) {
    res.render('new_post_pages/new_post_success', {
        title: pageTitle + 'Post successful!'
    });
};

exports.new_post_add = function (req, res) {
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
        } else {
            res.redirect('/new_post_success');
        }
    });
}


exports.show_post = function (req, res) {
    Post.find({ 'slug': req.params.slug }, function(err, post) {
        if (err) {
            console.log(err);
        }
        res.render('post', {
            post: post[0],
            content: marked(post[0].content),
            description: description,
            imageLocation: imageLocation
        })
    });
}