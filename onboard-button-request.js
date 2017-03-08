var five = require('johnny-five');
var chipio = require('chip-io');
var request = require('request');
var moment = require('moment');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function() {
  // Create an button for the built-in button
  var onboardButton = new chipio.OnboardButton();

  // add event listener for the 'up' event
  // note: the on-board button emits the 'down' and 'up'
  //       event at the same time on button release

  onboardButton.on('up', function() {
    console.log('up - button pressed');

		var postBody = {
			id: Number(moment(Date.now()).format('YYYYMMDD')),
			delivered: true,
			//retrieved: false,
			//retrievedByName: '',
			note: 'Sent from C.H.I.P.',
		}

		console.log(postBody);
		var requestURL = 'https://trigger-api.herokuapp.com/event/post';
		var options = {
			method: 'POST',
			url: requestURL,
			headers: {
				'cache-control': 'no-cache',
				'content-type': 'application/json' },
			body: postBody,
			json: true
		};

		request(options, function (error, response, body) {
			//if (error) throw new Error(error);
			console.log('Delivery event sent at '  + moment(Date.now()).format('LL h:mma'));
		});
  });

});
