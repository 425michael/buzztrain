//var cylon = require('cylon');
var socket = require('socket.io-client')
    //.connect('http://buzztrain.azurewebsites.net');
    .connect('http://192.168.1.2:3000');

//work on a real device
//cylon.robot({
//    name: 'edison',
//    connections: { edison: { adaptor: 'intel-iot' } },
//    devices: { monkey: { driver: 'direct-pin', pin: 2 } },
//    work: function (edison) {
        socket.on('command', function (cmd) {
			console.log(cmd);
		//            edison.monkey.digitalWrite(1);
//            setTimeout(function () { edison.monkey.digitalWrite(0); }, 2000);
//        })
//    }
//}).start();

////test in a console window
//console.log("Requesting to be target...");
//socket.emit('setTarget');
//socket.on('command', function (cmd) {
//    console.log('Received a command: ' + cmd);
//})
