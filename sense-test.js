var PythonShell = require('python-shell');

var options = {
	mode: 'json'
};

setInterval(function () {
	PythonShell.run('fag.py', options, function (err, results) {
		if (err) throw err;
		// Results is a JSON array.
		console.log('results: %j', results);
	});
}, 60000);
