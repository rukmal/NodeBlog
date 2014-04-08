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
			var response;
			if (data.status != 'connected') {
				response = false;
			} else if (AUTHORS.indexOf(data.authResponse.userID) === -1){
				response = true;
			} else {
				response = true;
			}
			console.log(response);
			socket.emit('nodeblog-auth-response', response);
		});
	});
};

module.exports = SocketConfig;