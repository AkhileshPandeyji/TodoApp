const {mongoose} = require('./../server/mongoose-connection/mongoose.js');
const {Todo} = require('./../server/models/todos.js');
const {ObjectID} = require('mongodb');

const id = "5baf90b361879c4f602de91b";//valid objectid
//const id = "6baf90b361879c4f602de91b"; valid but non-existing id

// const id = "5baf90b361879c4f602de91b111";
if(!ObjectID.isValid(id)){
  console.log('ObjectId not valid');
}

//find({query})- array of documents that match the query.

Todo.find({
  _id:id
}).then((res)=>{
  console.log(res);
},(error)=>{
  console.log('unable to find id',error);
});
//findOne({query})-return only one document that first matches the query.
Todo.findOne({
  _id:id
}).then((res)=>{
  console.log(res);
},(error)=>{
  console.log('unable to find id',error);
});
//findById(String(id))-will return only one document that matches the id first
Todo.findById(id).then((res)=>{
  console.log(res);
},(error)=>{
  console.log('unable to find the id',error);
}).catch((e) => console.log('id does not exist'));
