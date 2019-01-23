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
//deleteMany
// db.collection('user').deleteMany({text:'eat lunch'}).then((result)=>{
////   console.log(result);
//});
//deleteOne
// db.collection('user').deleteOne({text:'eat lunch'}).then((result)=>{
//   console.log(result);
// });
// db.collection('user').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });
db.collection('user').findOneAndDelete({_id:new ObjectID('5c47eb621ffc51669e638dd5')}).then((result)=>{
  console.log(result);
});
//client.close();
});
