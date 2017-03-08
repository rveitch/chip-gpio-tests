var request = require('request');
var url ='https://hooks.zapier.com/hooks/catch/2047978/maa2xj/'


var Gpio = require('chip-gpio').Gpio;
var btn = new Gpio(3, 'in', 'both', {
    debounceTimeout: 500
});
console.log("Trigger watching for button"); 
btn.watch(function (err, value) {
    if (err) {
        throw err;
    }
    console.log("Trigger Button pressed");
    notify_press;
});
 
function exit() {
    btn.unexport();
console.log("Trigger shutting down");
    process.exit();
}
 
function notify_press() {
console.log("Trigger notifying");
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});

 }
process.on('SIGINT', exit);
