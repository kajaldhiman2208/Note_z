import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:Email,
        required:true,
        unique:true,
    }
})

const User=mongoose.models.user || mongoose.model("users",userSchema);
export default User;