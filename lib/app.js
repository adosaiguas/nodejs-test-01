var winston = require('winston'); require('./winston-config');
var Hello = require('./hello');

var logger = winston.loggers.get('app');

logger.log('info', 'Starting App!');

// Create hello objects
var maika = new Hello("Maika!");
var world = new Hello();

// Say hello
logger.log('info', 'Say Hello!');
console.log(maika.sayHello());
console.log(world.sayHello());

// Say Bye
logger.log('info', 'Say Goodbye!');
console.log(maika.sayBye());
console.log(world.sayBye());

logger.log('info', 'Finished App!');
