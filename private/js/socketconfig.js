/*
 * @author Rukmal Weerawarana
 *
 * @description Socket.io configuration file
 */

function SocketConfig (server) {
	var io = require('socket.io').listen(server, { log: false });

	io.sockets.on('connection', function (socket) {
		socket.on('add request', function (data) {
			console.log(data);
		});
	});
};

module.exports = SocketConfig;