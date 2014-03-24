/*
 * @author Rukmal Weerawarana
 *
 * @description Mongoose database schema for comments.
 */

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    }

    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);
