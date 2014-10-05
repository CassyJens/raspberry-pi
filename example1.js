// my node program
// sends a random tweet on input
var pfio = require('piface-node');
pfio.init();
pfio.digital_write(0,1); // (pin, state)
var foo = pfio.digital_read(0); // (pin; returns state)
pfio.deinit();

