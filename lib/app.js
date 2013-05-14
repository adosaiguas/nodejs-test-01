var Hello = require('./hello');
var maika = new Hello("Maika!");
console.log(maika.sayHello());
var world = new Hello();
console.log(world.sayHello());