var mongoose=require('mongoose');
 var todo=mongoose.model('todo',{
  text:{
    type:String,
    required:true,
    Min:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:true
  },
  completedAt:{
    type:Number,
    require:true,
    default:null
  }

});
module.exports={todo};
