const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(error,db)=>{
  if(error)
  {
    return console.log('unable to connect to the mongodb');

  }
  console.log("connection successfull");
  db.db('TodoApp3').collection('Todos').find().toArray().then((res)=>{
    console.log(res);
  },(error)=>{
    console.log('unable to connect to the mongodb');
  });
  db.db('TodoApp3').collection('Todos').find({text:"Something to do"}).toArray()
    .then((res)=>{
      console.log(res);
    },(error)=>{
      console.log('unable to connect to the mongodb')
    });
    db.db('TodoApp3').collection('Todos').find({ _id: new ObjectID('5bae75d87ea9aa25c430237c')}).toArray().then((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error) ;
    });
    db.db('TodoApp3').collection('Todos').find({text:"Something to do"}).count().then((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  db.close();
})
