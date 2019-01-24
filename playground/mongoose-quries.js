const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {todo}=require('./../server/models/todo');
const {user}=require('./../server/models/user');
// id='5c496213c031e51e2091643b1';
// if(!ObjectID.isValid(id)){
//   console.log('id is not valid');
// }
// // todo.find({_id:id}).then((todos)=>{
// //   console.log('todos',todos);
// // });
// // todo.findOne({_id:id}).then((todo)=>{
// //   console.log('todo',todo);
// // });
// todo.findById(id).then((todos)=>{
//   if(!todos){
//     return console.log('id not found');
//   }
//   console.log('todo',todos);
// }).catch((e)=>console.log(e));
id='5c4836ac4184c93dab13f37f';
if(!ObjectID.isValid(id)){
  console.log('id is not valid');
}
user.findById(id).then((user)=>{
  if(!user){
    return console.log('id not found');
  }
  console.log('user by id',user);
}).catch((e)=>console.log(e));
