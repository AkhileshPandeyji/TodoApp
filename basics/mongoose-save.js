//load the mongoose library
const mongoose = require('mongoose');
//set the promise library of the mongoose
//to built in promise library
mongoose.Promise = global.Promise;
//mongoose connecting to the Database
 mongoose.connect('mongodb://localhost:27017/TodoApp');
 //mongoose object data/relational data mapping model
 //here Todo is the collection and the constructor name that will be returned
 //by the mongoose.model() which will take in the arguments as fields object.
 var Todo = mongoose.model('Todo',{
   text : {
     type: String
   },
   completed: {
     type: Boolean
   },
   completedAt: {
   // general /regular unix timestamp type
     type: Number
   }
   });
   //adding a new document to the mongodb db
   var newtodo = new Todo({
     text : 'Cook Dinner',
      completed : true ,
      completedAt : new Date().getTime()
   });
   //saving the document
   newtodo.save().then((result)=>{
    console.log(result);
  },(error)=>{
    console.log('Unable to insert',error);
   });
   // new Todo({
   //   text : 'write the debate',
   //   completed : false,
   //   completedAt : new Date().getTime()
   // }).save().then((result)=>{
   //   console.log(result);
   // },(error)=>{
   //   console.log('Unable to save',error);
   // });
