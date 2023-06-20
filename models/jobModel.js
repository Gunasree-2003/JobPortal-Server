import mongoose, { model } from "mongoose";
import validator from "validator";

const jobschema=new  mongoose.Schema({
    company:{
        type:String,
        required:[true ,'company name is required']
    },
    position:{
        type:String,
        required:true
    },
    worklocation:{
        type:String,
        default:"hyd"
    },
    worktype:{
        type:String,
        // enum:["full-time","part-time","internship","contract"],
        // default:"fulltime"
    }

},
{timestamps:true}
)

export default mongoose.model('Job',jobschema)