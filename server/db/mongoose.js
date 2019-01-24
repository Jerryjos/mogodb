var mongoose=require('mongoose');
mongoose.Promises=global.Promises;
mongoose.connect('process.env.MongoDB_URI ||mongodb://localhost:27017/TodoApp');
module.exports={mongoose};
