var http = require('http');
var request = require('request');
var twitterkeys = require('./twitterkeys');
var Twit = require('twit');
var keys = {
    consumer_key:         twitterkeys.consumerKey,
    consumer_secret:      twitterkeys.consumerSecret,
    access_token:         twitterkeys.accessToken,
    access_token_secret:  twitterkeys.accessTokenSecret
};
var T = new Twit(keys);

module.exports = {
    randomGif: http.get("http://bukkit.tangentialism.com/", function (res) {
        request(options, function (response, error, body){
            T.post('statuses/update', { status: 'random gif: [' + res.headers.location + ']'}, function (err, data, response) {

            });
        });
    }).on('error', function (e) {
        console.log("error occurred", e);
    })
};
