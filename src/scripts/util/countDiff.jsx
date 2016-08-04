var moment = require('moment');

var end = parseInt(moment('2016-08-04 22').format('X'));

function countDiff() {
	var diff = end - parseInt(moment().format('X'));
	var duration = moment.duration(diff, 'seconds');
	return duration.hours() + ':' + duration.minutes() + ':' + duration.seconds();
}

module.exports = countDiff;
