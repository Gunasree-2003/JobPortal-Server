import mongoose, { model } from "mongoose";
import validator from "validator";

const userschema=new  mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        default:"chitoor"
    }
},
{timestamps:true}
)

export default mongoose.model('Users',userschema)