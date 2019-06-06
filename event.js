var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create event process function
var connectHander = function connected() {
  console.log("Conntect Successfully!");
  eventEmitter.emit('data_received');
};

// Binding event process function
eventEmitter.on("connection", connectHander);

eventEmitter.on('data_received', function() {
  console.log("Data Received Successfully!");
});

eventEmitter.emit("connection");

eventEmitter.on("testevent", function(arg1, arg2) {
  console.log(arg1 + " " + arg2);
});

eventEmitter.emit("testevent", "Hello", "World");

console.log("Finished!");
