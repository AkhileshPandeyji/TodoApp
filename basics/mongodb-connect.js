//we have a npm module created by the mongodb developer team
//called node mongodb native..
//it lets us manipulate the mongodb local database server
//then we write
//npm install mongodb@3.1.6 --save
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to the mongodb servers');
  }

  db.collection('Todos').insertOne({
    text : 'Something to do',
    completed : false
  },(err,result)=>{
    if(err)
    {
      return console.log('Unable to write to the collection');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});
//not working working only when the database is already created.
//we can use
//the options in MongoClient.connect(1,2,3)
// 2.{useNewUrlParser:true}
//to remove errors in the console.
