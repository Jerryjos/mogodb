const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
var password='123ert';
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  });
});
var hashpassword='$2b$10$febBuoDWde3IUyueAtgvpu0LBj7dXFiL/6.AZ/ds1EcSgHYngrMC2';
bcrypt.compare('123e',hashpassword,(error,res)=>{
  console.log(res);
});
// var data={
//   id:10
// };
// var token=jwt.sign(data,'123a');
// console.log('token',token);
// var decrpt=jwt.verify(token,'123a');
// console.log('decrpt',decrpt);
// var msg="i am jerry";
// var hash=SHA256(msg).toString();
// console.log(`message:${msg}`);
// console.log(`hash:${hash}`);
