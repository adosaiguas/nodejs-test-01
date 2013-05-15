var Hello = require('./hello');
var maika = new Hello("Maika!");
var world = new Hello();
console.log(maika.sayHello());
console.log(world.sayHello());
console.log(maika.sayBye());
console.log(world.sayBye());