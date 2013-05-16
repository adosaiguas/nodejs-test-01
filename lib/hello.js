function Hello() {}

function Hello(name) {
	this.name = typeof name !== 'undefined' ? name : "World!";
}

function sayHello() {
	return 'Hello ' + this.name;	
}

function sayBye() {
	return 'Goodbye ' + this.name;	
}

Hello.prototype = {
	sayHello: sayHello,
	sayBye: sayBye
};

module.exports = Hello;