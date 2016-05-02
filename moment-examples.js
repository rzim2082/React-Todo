var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current Time', now.unix());



var timestamp = 1462195041;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM Do YYYY, h:mm a' ));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A' ));

// MMMM Do, YYYY h:mm A