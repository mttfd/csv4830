var readcsv = require('./lib/readcsv'),
    writecsv = require('./lib/writecsv');

var csvArr = readcsv.getCSVObject("/Users/tanmingqin/Desktop/asdasd.txt", function(csv) {
    console.log(csv)
});

writecsv.writeToFile("./test.txt", [['a', 'a', 'b'], ['b', 'c', 'd']]);
