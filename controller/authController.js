import UserModels from '../models/UserModels.js'
import bcrypt from 'bcryptjs'


export const registercontroller=async (req,res,next)=>{
    
    try{
        const {name,email,password}=req.body

//validate

        if(!name){
            next('name is required')
        }
        if(!email){
            next('email is required')
        }
        if(!password){
            next('password is required')
        }

//check the stored data
//if email is there its already there
    const existinguser= await UserModels.findOne({name,email})
    if(existinguser){
        return res.status(200).send(
            {
                success:true,
                message:'Email is already there'
            })
    }



//store the new data
    const newUser={
        name:name,
        email:email,
        password:bcrypt.hashSync(password)
    }
    const user=UserModels.create(newUser)
    res.send({
        status:true,
        message:'user is registered successfully'
    })


    }
    catch(err){
        next('error in registering the user')

    }




}

