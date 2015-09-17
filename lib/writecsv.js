var fs = require('fs');

function writeToFile(dir, arr) {
	var dest = fs.createWriteStream(dir);

	dest.on('error', function(err) {
		console.log("something wrong when writing... ");
		//should remove the newly created file... might do it next time
		throw new Error(err);
	});

	dest.on("end", function() {
		console.log("end writing");
		dest.end();
	});

	var len = arr.length;
	for(var i = 0; i < len; i++) {
		dest.write(arr[i].join(", ") + "\n");
	}
}

module.exports = {
	writeToFile: writeToFile
};

