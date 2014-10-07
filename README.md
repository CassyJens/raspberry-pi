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
The other dependency, necessary to run twitter-bot.js, should be installed in the project root using the following command:

```
npm install twit
```

twitter-bot.js is a work-in-progress. My original plan was to hook the switches up to the twitter-bot.js for posting random GIFs from bukk.it to a Twitter account, for fun and cheap entertainment. 
