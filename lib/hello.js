var winston = require('winston');
var logger = winston.loggers.get('hello');

function Hello() {}

function Hello(name) {
	this.name = typeof name !== 'undefined' ? name : "World!";
	logger.log('debug', "Created Hello object with name %s", this.name);
}

function sayHello() {
	logger.log('debug', "Say: Hello %s", this.name);
	return 'Hello ' + this.name;	
}

function sayBye() {
	logger.log('debug', "Say: Goodbye %s", this.name);
	return 'Goodbye ' + this.name;	
}

Hello.prototype = {
	sayHello: sayHello,
	sayBye: sayBye
};

module.exports = Hello;