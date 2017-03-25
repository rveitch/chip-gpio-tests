var five = require('johnny-five');
var chipio = require('chip-io');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // Create an button on the XIO-P6 pin
  var button = new five.Button({
		'XIO-P6',
		isPullup: true
	});

  // add event listeners for 'up' and 'down' events

  button.on('down', function() {
    console.log('down');
  });

  button.on('up', function() {
    console.log('up');
  });
});
