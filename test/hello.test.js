var Hello = require('../lib/hello');

exports.testSayHello = function(test) {
	test.expect(2);

	var world = new Hello();
	test.equal(world.sayHello(), "Hello World!");

	var maika = new Hello("Maika!");
	test.equal(maika.sayHello(), "Hello Maika!");

	test.done();
};