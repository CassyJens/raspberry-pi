var http = require('http');
var twitterkeys = require('./twitterkeys');
var Twit = require('twit');
var keys = {
    consumer_key:         twitterkeys.consumerKey,
    consumer_secret:      twitterkeys.consumerSecret,
    access_token:         twitterkeys.accessToken,
    access_token_secret:  twitterkeys.accessTokenSecret
};
var T = new Twit(keys);

// get a random image from bukk.it
http.get("http://bukkit.tangentialism.com/", function (res) {
    // TODO add IMG from response to tweet
    console.log("got response ", res.statusCode);
    T.post('statuses/update', { status: 'hello world!' }, function (err, data, response) {
        console.log("data is", data);
        console.log("error is", err);
    });
}).on('error', function (e) {
    console.log("error occurred", e);
});
