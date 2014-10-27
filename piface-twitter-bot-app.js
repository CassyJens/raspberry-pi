var twitterBot = require('./twitter');

var pfio = require('piface-node');
pfio.init();

var foo = pfio.read_input();
pfio.write_output(255);
pfio.deinit();

// TODO Hook up inputs to tweet
twitterBot.gif();
