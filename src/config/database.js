const mongoose=require('mongoose');
const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://vemugantisaicharan222_db_user:lcy7nNChBl6DnxeE@devtinder.v6jktpv.mongodb.net/Devtinder")
};
 module.exports=connectDB;

