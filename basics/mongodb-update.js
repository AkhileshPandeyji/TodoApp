const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,{useNewUrlParser:true},(error,db)=>{

  if(error){
    return console.log('Unable to connect to the Database');
    }
    console.log('Connected to the Database ');
    db.db('TodoApp3').collection('Users').findOneAndUpdate({
       _id:new ObjectID("5baf1549175977dce31cd637")},
       {
         $set:{
         name : 'Somya',
         location : 'Delhi'
       },
        $inc:{
          age : 10
        }
        }
      ,{
        returnOriginal: false
      }
    ).then((result)=>{
      console.log(result.value);
    },(error)=>{
      console.log('Unable to Update',error);
    });
  db.close();
});
