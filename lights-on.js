var pfio = require('piface-node');
pfio.init();
var foo = pfio.read_input();

/**
 * Turn all outputs on.
 */
pfio.write_output(255);
pfio.deinit();
