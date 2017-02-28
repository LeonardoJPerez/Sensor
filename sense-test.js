const PythonShell = require('python-shell');
const bunyan = require('bunyan');
const seq = require('bunyan-seq');

const options = {
	mode: 'json'
};

const log = bunyan.createLogger({
	name: 'Sensor',
	streams: [
		seq.createStream({ serverUrl: 'http://localhost:5341' })
	]
});

let interval = 5000;
setInterval(function () {
	PythonShell.run('fag.py', options, function (err, results) {
		if (err) throw err;
		// Results is a JSON array.
		console.log('results: %j', results);

		log.info({ timestamp: Date.now(), data: results }, "Results");

		// Grab sensor data.
		// Send to Maker channel.
	});
}, interval);
