const {ObjectID} = require('mongodb');

var time = new ObjectID();
console.log('Now the time is:',time.getTimestamp());
//getTimestamp() on the ObjectID object.
