/*
 * @author Rukmal Weerawarana
 *
 * @description Node configuration, routing, add new post page authentication
 * and socket.io configuration.
 */

var express = require('express');
var routes = require('./routes/main');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var postSchema = require('./models/post');

var authors = ['1062761833', '1234567890']; // <-- Change this to the Facebook ID's of the authors

var dbURL = 'mongodb://rukmal:test@ds029328.mongolab.com:29328/nodeblogdemo'; // <-- Change this to
// the URL of your Mongo database

mongoose.connect(dbURL);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// HTTP get request routing
app.get('/', routes.index);
app.get('/new_post', routes.new_post);
app.get('/all_posts', routes.all_posts);
app.get('/new_post_error', routes.new_post_error);
app.get('/new_post_success', routes.new_post_success);

// HTTP post request routing
app.post('/new_post_add', routes.new_post_add);

// Generic HTTP get request routing
app.get('/post/:slug', routes.show_post);


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.on('facebook-data', function(data) {
        console.log(data);
        if (authors.indexOf(data.id) != -1) {
            socket.emit('button-data', { display: true });
        } else {
            socket.emit('button-data', { display: false });
        }
    });
});