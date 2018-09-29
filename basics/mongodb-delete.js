const MongoClient = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error,db)=>{
if(error){
  return console.log('could not connect  to database');
}
console.log('Connected to the Database');
//deleteMany()
// db.db('TodoApp3').collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
//   console.log(result.result);
// },(error)=>{
//   console.log('Unable to delete',error);
// });
//deleteOne()
// db.db('TodoApp3').collection('Todos').deleteOne({name:'Akhilesh'}).then((result)=>{
//   console.log(result.result);
// },(error)=>{
//   console.log('Unable to delete',error);
// });

//findOneAndDelete()
// db.db('TodoApp3').collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
//   console.log(result.value);
// },(error)=>{
//   console.log('Unable to delete',error);
// });
//using _id property
// db.db('TodoApp3').collection('Users').deleteOne({_id: new ObjectID("5bae764110169d0a643c9651")}).then((result)=>{
//   console.log(result.result)
// },(error)=>{
//   console.log('Unable to delete',error);
// });
 db.close();
});
