/*
 * @author Rukmal Weerawarana
 *
 * @description Mongoose database schema for posts.
 */

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    slug: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Post', postSchema);
