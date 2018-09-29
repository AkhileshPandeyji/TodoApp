const mongoose = require('mongoose');
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
module.exports={User};
