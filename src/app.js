const express= require('express');
const app=express();
// app.use('/',(req,res)=>{
//     res.send("yes, your on track!!!")
// })
app.use("/test",(req,res)=>{
    res.send("yes test also working")
})
app.use("/hello",(req,res)=>{
    res.send("hello hello")
})
app.listen(3000,()=>{
    console.log("app running on port 3000...")
})