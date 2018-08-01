var fs = require('fs');
var colors = require('colors');

fs.readdir('../13.7', 'utf-8', function(err, data) {
    console.log(data);

    fs.writeFile('content.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});