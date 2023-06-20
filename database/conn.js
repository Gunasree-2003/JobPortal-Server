import mongoose from "mongoose";


const connectDB=async ()=>{
    try{
        const conn=await (await mongoose.connect(process.env.mongo_url))
            console.log("succesfully connected to the mongodb")
    }
    catch(error){
        console.log(`mongodb error:${error}`)

    }
}

export default connectDB