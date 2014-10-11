raspberry-pi
============

#About
This little project holds software created from exploration with Raspberry Pi, PiFace and Node.

#Run
In order to use Node.js to interface with the PiFace, we will install the module 'piface-node'. This module comes along with a nice README.md which will help you install dependencies like Node.js and PiFace C Libraries. Find the README.md here: https://github.com/darrylhodgins/piface-node. You'll also want to install the piface-node module in your project directory using NPM:

```
npm install piface-node
```

With Node.js and the piface-node module, you can run examples 'lights-on.js' and 'lights-off.js', which are renamed examples from the piface-node project referenced above.
The other dependencies, necessary to run twitter-bot.js, should be installed in the project root using the following command:

```
npm install
```
twitter-bot posts a random gif from bukk.it to your twitter account.
