// Import the 'events' module
const EventEmitter = require('events');


// Create an EventEmitter object
const eventEmitter = new EventEmitter();


// Define an event handler function 
function greetUser() {
console.log('Hello! Welcome to Node.js Events.');
}


// Assign the event handler to an event named 'greet' 
eventEmitter.on('greet', greetUser);

// You can also pass data with the event 
eventEmitter.on('message', (name) => {
console.log(`Hello ${name}, this is a custom message event!`);
});


// Trigger (emit) the events 
eventEmitter.emit('greet'); eventEmitter.emit('message', 'Diksha');

// Demonstrate multiple listeners for the same event 
eventEmitter.on('data', () => {
console.log('Data event received - listener 1');
 
});
eventEmitter.on('data', () => { console.log('Data event received - listener 2');
});


// Emit 'data' event 
eventEmitter.emit('data');
