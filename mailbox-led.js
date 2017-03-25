var five = require('johnny-five');
var chipio = require('chip-io');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // Create an button on the XIO-P1 pin
  var button = new five.Button('XIO-P1');
	// Create an LED on the XIO-P6 pin
	var led = new five.Led('XIO-P6');

  // add event listeners for 'up' and 'down' events
  button.on('down', function() {
    console.log('Door Closed');
		led.off();
  });

  button.on('up', function() {
    console.log('Door Open');
		led.on();
  });
});
