/*
 * @author Rukmal Weerawarana
 *
 * @description Socket.io configuration file
 */

var AUTHORS = ['1062761833', '1234567890']; // <-- Change this to the Facebook ID's of the authors

function SocketConfig (server) {
	var io = require('socket.io').listen(server, { log: false });

	io.sockets.on('connection', function (socket) {
		socket.on('facebook-login-info', function (data) {
			var message;
			if (data.status != 'connected') {
				message = 'bad';
			} else if (AUTHORS.indexOf(data.authResponse.userID) === -1){
				message = 'bad';
			} else {
				message = 'good';
			}
			socket.emit('nodeblog-auth-response', message);
		});
	});
};

module.exports = SocketConfig;