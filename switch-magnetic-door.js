var five = require('johnny-five');
var chipio = require('chip-io');
var board = new five.Board({ io: new chipio() });

board.on('ready', function() {
  // Contact Mode: Normally Open (default!)
  var sw = new five.Switch('XIO-P6');

  sw.on('open', function() {
    console.log('open');
  });

  sw.on('close', function() {
    console.log('close');
  });
});
