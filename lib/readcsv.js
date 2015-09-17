var liner = require('./liner'),
	fs = require('fs');


function getCSVObject(dir, cb) {
	var source = fs.createReadStream(dir),
		csv = [];

	source.pipe(liner);

	liner.on('error', function(err) {
		console.error("something wrong... " + err);
		throw err;
	});

	liner.on('readable',function() {
		var line;
		while(line = liner.read()) {
			csv.push(processLine(line));
		}
	});

	liner.on("end", function() {
		cb(csv);
	});
}


function processLine(line) {
	var words = line.split(",");
	var len = words.length;
	for(var i = 0; i < len; i++) {
		words[i] = words[i].trim();
	}
	return words;
}

module.exports = {
	getCSVObject: getCSVObject
};
