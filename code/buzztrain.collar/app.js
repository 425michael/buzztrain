// Software Configuration========================
var mraa = require('mraa');
//var cylon = require('cylon');
var socket = require('socket.io-client')
	.connect('http://buzztrain.azurewebsites.net');

// HW Configuration =============================
var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_OUT);
pin13.write(0);

var buzzer = new mraa.Gpio(3);
buzzer.dir(mraa.DIR_OUT);

console.log ( 'Setup Complete' );

// Main code ===================================
socket.on('connection', function() { console.log ( 'Socket Connected' ); });

socket.on('command',function (cmd) {
	console.log ( 'Command Received' + cmd.type );
	switch (cmd.type) {
		case 'sit':
			console.log ( 'Sit' );
			cmd1();
			break;
		case 'laydown':
			console.log ( 'Laydown' );
			cmd2();
			break;
		case 'stay':
			console.log ( 'Stay' );
			cmd3();
			break;
	}
});

//cmd1(); // one second beep
//cmd2(); // two half second beeps
//cmd3(); // three very short beeps



// Command 1 ===================================
function cmd1() {
	console.log ( 'Command 1 Triggered' );
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd1_off2,1000);
}
function cmd1_off1() {
	buzzer.write(0);
	pin13.write(0);
	setTimeout( cmd1_on2,500);
}
function cmd1_on2() {
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd1_off2,500);
}
function cmd1_off2() {
	buzzer.write(0);
	pin13.write(0);
	console.log ( 'Command 1 Finished' );
}

// Command 2 ===================================
function cmd2() {
	console.log ( 'Command 2 Triggered' );
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd2_off1,500);
}
function cmd2_off1() {
	buzzer.write(0);
	pin13.write(0);
	setTimeout( cmd2_on2,250);
}
function cmd2_on2() {
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd2_off2,500);
}
function cmd2_off2() {
	buzzer.write(0);
	pin13.write(0);
	console.log ( 'Command 2 Finished' );
}

// Command 3 ===================================
function cmd3() {
	console.log ( 'Command 3 Triggered' );
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd3_off1,250);
}
function cmd3_off1() {
	buzzer.write(0);
	pin13.write(0);
	setTimeout( cmd3_on2,100);
}
function cmd3_on2() {
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd3_off2,250);
}
function cmd3_off2() {
	buzzer.write(0);
	pin13.write(0);
	setTimeout( cmd3_on3,100);
}
function cmd3_on3() {
	buzzer.write(1);
	pin13.write(1);
	setTimeout( cmd3_off3,250);
}
function cmd3_off3() {
	buzzer.write(0);
	pin13.write(0);
	console.log ( 'Command 3 Finished' );
}
