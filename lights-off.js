// turns the lights back off
pfio = require('piface-node');
pfio.init();
var foo = pfio.read_input(); // bit-mapped
pfio.write_output(0); // turn all outputs off.
pfio.deinit();
