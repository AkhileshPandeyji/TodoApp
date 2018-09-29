const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./mongoose-connection/mongoose.js');
const {Todo} = require('./models/todos.js');
const {User} = require('./models/users.js');

var app = express();
//express middleware
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  var newtodo = new Todo({
    text : req.body.text
  });
  newtodo.save().then((result)=>{
    res.status(200).send(result);
  },(error)=>{
    res.status(404).send(error);
    console.log('could not write to the database');
  });
});
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    //this will be array so for addons we require object
    res.status(200).send({todos});
  },(error)=>{
    res.status(400).send(error);
  });
});
//GET/todos/12345
//req.params is an object that contains the key value pairs
//key=>/todos/:id url get variable and the value that is actually passed.
//key =>id and value=>12345
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((result)=>{
    if(!result){
    return  res.status(404).send();
    }
    res.status(200).send(result);
  },(error)=>{
    res.status(400).send();
  })
});
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
