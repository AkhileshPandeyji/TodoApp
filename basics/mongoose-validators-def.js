const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var Todo = mongoose.model('Todo',{
  text:{
    type : String,
    required : true,
    minlength : 1,
    maxlength : 50,
    trim : true
  },
  completed:{
    type : Boolean,
    default : false
  },
  completedAt:{
    type:Number,
    default:null
  }
});
var newtodo = new Todo({
  text:''
});
newtodo.save().then((result)=>{
  console.log(result);
},(error)=>{
  console.log('Unable to save',error);
});
var User = mongoose.model('User',{
  email:{
    type : String,
    required : true,
    minlength : 1,
    maxlength : 50,
    trim : true
  },
  password:{
    type : String ,
    default:'123abc'
  }
});
var newuser = new User({
  email : ''
});
newuser.save().then((result)=>{
  console.log(result);
},(error)=>{
  console.log('Unable to save user',error);
});
