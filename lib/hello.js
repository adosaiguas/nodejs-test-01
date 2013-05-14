function Hello() {}

function Hello(name) {
	this.name = typeof name !== 'undefined' ? name : "World!";
}

function sayHello() {
	return 'Hello ' + this.name;	
}

Hello.prototype = {
	sayHello: sayHello
}

module.exports = Hello;