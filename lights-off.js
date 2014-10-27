var pfio = require('piface-node');
pfio.init();
var foo = pfio.read_input();

/**
 * Turn all outputs off.
 */
pfio.write_output(0);
pfio.deinit();
