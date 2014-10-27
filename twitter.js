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
    /**
     * Posts a tweet to a twitter feed.
     * @param {string} status - the status to be posted to twitter feed
     * @param {function} success - is passed err, data, response
     */
    tweet: function (status, success) {
        T.post(
            'statuses/update',
            {status: status},
            success
        );
    }
};
