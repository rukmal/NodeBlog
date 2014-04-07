/*
 * @author Rukmal Weerawarana
 *
 * @description Socket.io configuration file
 */

var authors = ['1062761833', '1234567890']; // <-- Change this to the Facebook ID's of the authors

function SocketConfig (server) {
	var io = require('socket.io').listen(server, { log: false });

	io.sockets.on('connection', function (socket) {
		socket.emit('test', {
			hello: 'hello world'
		});

		socket.on('facebook-login-data', function (data) {
			console.log(data);
		});
	});
};

module.exports = SocketConfig;