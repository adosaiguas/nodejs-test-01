var Hello = require('../lib/hello');

exports.testSayHello = function(test) {
	test.expect(2);

	var world = new Hello();
	var maika = new Hello("Maika!");

	test.equal(world.sayHello(), "Hello World!");
	test.equal(maika.sayHello(), "Hello Maika!");

	test.done();
};

exports.testSayBye = function(test) {
	test.expect(2);

	var world = new Hello();
	var maika = new Hello("Maika!");

	test.equal(world.sayBye(), "Goodbye World!");
	test.equal(maika.sayBye(), "Goodbye Maika!");

	test.done();
};