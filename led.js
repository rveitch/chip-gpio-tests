var five = require('johnny-five');
var chipio = require('chip-io');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // Create an LED on the XIO-P6 pin
  var led = new five.Led('XIO-P6');

  // Blink every half second
  led.blink(500);
});
