const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a,b) {
  console.log('an event occurred!');
  console.log(a, b,this, this == myEmitter);
});
myEmitter.on('error', (err) => {
  console.error('whoops! there was a error');
});
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('event', 'a', 'b');
