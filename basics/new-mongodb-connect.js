//we have a npm module created by the mongodb developer team
//called node mongodb native..
//it lets us manipulate the mongodb local database server
//then we write
//npm install mongodb@3.1.6 --save
//the structure of the mongodb -
//local host db-sub db-collections-documents-fields/properties
//node app-client(connection)-mongodb local db-subdb



//making /getting client
const MongoClient = require('mongodb').MongoClient;
//url to the database home
const url = 'mongodb://localhost:27017';//localdb
MongoClient.connect(url,(error,db)=>{
  if(error)
  return console.log('Unable to connect to the database mongodb');
  console.log('connection established successfully');
  db.db('TodoApp3').collection('Todos').insertOne({ //subdb
    text:"Something to do",
    completed: true
  },(error,result)=>{
    if(error)
    return console.log('unable to insert');
    console.log('inserted successfully');
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops);
  });
  db.db('TodoApp3').collection('Users').insertOne({
    name : 'Akhilesh',
    age: 23,
    location : 'Philedalphia'
  },(error,result)=>{
    if(error)
    return console.log('unable to insert');
    console.log('inserted successfully');
    console.log(result.ops);
  });
  db.close();//vimp
});
