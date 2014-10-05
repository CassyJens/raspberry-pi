var pfio = require('piface-node');
pfio.init();
var foo = pfio.read_input(); // bit-mapped
pfio.write_output(255); // that's binary 11111111, so it'll turn all outputs on.
pfio.deinit();

