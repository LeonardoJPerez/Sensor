var PythonShell = require('python-shell');
 
setInterval(function(){
	PythonShell.run('fag.py', function (err, results) {
		if (err) throw err;
		// results is an array consisting of messages collected during execution 
	  	console.log('results: %j', results);
	});
}, 5000);
