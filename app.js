const EventEmitter = require('events');
//const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (arg) => {
    console.log('Listener called', arg);
});

logger.log('mess');