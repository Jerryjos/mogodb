//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
 const obj=new ObjectID;
 console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
const db=client.db('TodoApp');
// db.collection('Todos').find({
//   _id:ObjectID('5c4718c231b06e44a864a1f7')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(error)=>{
//   console.log('unable to fecth',error);
// });
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`todos count ${count}`);
// },(error)=>{
//   console.log('unable to fecth',error);
// });
db.collection('user').find({name:'Something to do'}).toArray().then((docs)=>{
  console.log('user');
  console.log(JSON.stringify(docs,undefined,2));
},(error)=>{
  console.log('unable to fecth',error);
});


//client.close();
});
