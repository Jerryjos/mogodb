var mongoose=require('mongoose');
var user=mongoose.model('user',{
  email:{
    type:String,
    require:true,
    trim:true,
    min:1
  }
});
module.exports={user};
