var moment = require('moment');

var end = parseInt(moment('2016-08-04 22').format('X'));

function pad(x) {
	if (x < 10) return '0' + x;
	else return x;
}

function countDiff() {
	var diff = end - parseInt(moment().format('X'));
	var duration = moment.duration(diff, 'seconds');
	return pad(duration.hours()) + ':' + pad(duration.minutes()) + ':' + pad(duration.seconds());
}

// test
// setInterval(function() {
// 	console.log(countDiff());
// }, 1000);

module.exports = countDiff;
