var moment = require('moment');

var end = parseInt(moment('2016-08-04 22').format('X'));

function countDiff() {
	var diff = end - parseInt(moment().format('X'));
	var duration = moment.duration(diff, 'seconds');
	return {
		h: duration.hours(),
		m: duration.minutes(),
		s: duration.seconds()
	};
}

// test

setInterval(function() {
	console.log(countDiff());
}, 1000);

module.exports = countDiff;
