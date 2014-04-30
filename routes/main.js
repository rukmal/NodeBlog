/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file.
 */

'use strict'

var Post = require('./../models/post');
var marked = require('marked');
var fs = require('fs');

// Location of author data
var authorJSON = './userdata.json';
var author = JSON.parse(fs.readFileSync(authorJSON));

exports.index = function (req, res) {
	var myCursor = Post.find();
	myCursor.sort({ 'date': -1 });
	myCursor.find(function (err, posts) {
		var displayedPosts = [];
		for (var i = 0; i < 5; i++) {
			try {
				displayedPosts.push({
					title: posts[i].title,
					slug: posts[i].slug
				});
			} catch (err) {
				break;
			}
		}
		console.log(displayedPosts);
		res.render('index',{
			title: author.pagetitle + 'Home',
			name: author.firstname,
			posts: displayedPosts
		});
	});
};

exports.all_posts = function (req, res) {
	var myCursor = Post.find();
	myCursor.sort({ 'date': -1 });
	myCursor.find(function (err, posts) {
		if (err) {
			console.log(err);
		}
		res.render('all_posts', {
			personalSite: author.website,
			fullName: author.firstname + ' ' + author.lastname,
			title: author.pagetitle + 'All posts',
			posts: posts
		});
	});
};

exports.new_post = function (req, res) {
	res.render('new_post_pages/new_post', {
		title: author.pagetitle + 'Add new post'
	});
};

exports.edit_post = function (req, res) {
	res.render('edit_post', {
		title: author.pagetitle + 'Edit post',
	})
}

exports.new_post_error = function (req, res) {
	res.render('new_post_pages/new_post_error', {
		title: author.pagetitle + 'Post error'
	});
};

exports.new_post_success = function (req, res) {
	res.render('new_post_pages/new_post_success', {
		title: author.pagetitle + 'Post successful!'
	});
};

exports.new_post_add = function (req, res) {
	var post = new Post({
		title: req.body.post_title,
		content: req.body.post_content,
		description: req.body.post_description,
		photo: req.body.post_photo,
		slug: 'post/' + req.body.post_slug
	});

	post.save(function(err) {
		if (err) {
			res.redirect('/new_post_error');
		} else {
			res.redirect('/new_post_success');
		}
	});
};


exports.show_post = function (req, res) {
    Post.find({ 'slug': req.params.slug }, function(err, post) {
        if (err) {
            console.log(err);
        }
        res.render('post', {
        	title: post[0].title,
            post: post[0],
            content: marked(post[0].content),
            description: author.description,
            imageLocation: author.userpicture,
            twitterID: author.twitter
        })
    });
};