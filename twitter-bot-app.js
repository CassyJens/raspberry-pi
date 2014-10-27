var twitter = require('./twitter');
var gif = require('./gif');
var express = require('express');
var app = express();

var options = {
    success: function (gif) {
        var status = 'random gif: [' + gif + ']';

        twitter.tweet(status, function (err, data, response) {
            console.log('status update successful', status);
            process.exit(code=0);
        });
    },
    error: function (e) {
        console.log('error', e);
    }
};

/**
 * Serve static files.
 */
app.use(express.static(__dirname));

/**
 * Returns a random GIF URL to the client
 */
app.get('/gif', function (req, res) {
    gif.randomGif(function (gif) {
        res.json({gif: gif});
    }, options.error);
});

// TODO
// /**
//  * Posts a random tweet to a twitter account
//  */
// app.post('/gif/twitter', function (req, res) {
//     gif.randomGif(options.success, options.error);
// });

app.listen(3000);
