const EventEmitter = require('events');
//const emitter = new EventEmitter();

//var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log (message) {
        console.log(message);

        this.emit('message', {id:1, url:'http://' });

    }
}

module.exports = Logger;

// console.log(module);

// const arch = require('process');

// console.log(`This processor architecture is ${arch}`);

// //const chdir = require('process');
// const cwd = require('process');
// console.log(`Starting directory: ${cwd()}`);
// try {
//   chdir('/tmp');
//   console.log(`New directory: ${cwd()}`);
// } catch (err) {
//   console.error(`chdir: ${err}`);
// }