const express= require('express');
const connectDB=require('./config/database')
const app=express();

connectDB()
     .then(()=>{
   console.log("connected to db")
   app.listen(3000,()=>{
    console.log("app running on port 3000...")
})
})
    .catch(()=>{
    console.log("not connected to db some error has happened")
})
