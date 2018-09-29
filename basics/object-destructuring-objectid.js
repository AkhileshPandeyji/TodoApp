//const MongoClient = require('momgodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb') ;
//object destructuring
//here the var name is set to the property name and its
//value is equal to the property value.
var obj = {
  name : 'andrew',
  age: 34
};
var {name} = obj;
var {age} = obj;
console.log(name,age);
//creating our own ObjectIDs

var obj2 = new ObjectID();
console.log(obj2);
