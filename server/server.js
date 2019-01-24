const {ObjectID}=require('mongodb');
var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todo');
var {user}=require('./models/user');
var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
var newtodo=new todo({
  text:req.body.text
});
newtodo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
  res.status(400).send(e);
});
});
app.get('/todos',(req,res)=>{
  todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});
app.get('/todos/:id',(req,res)=>{
  id=req.params.id;
  if(!ObjectID.isValid(id)){
   return  res.status(404).send();
 }
 todo.findById(id).then((todo)=>{
   if(!todo){
     return res.status(404).send();
   }
   res.send({todo});
 }).catch((e)=>  {
   res.status(404).send();});

});
app.listen(3000,()=>{
  console.log('started on port 3000');
});
module.exports={app};
