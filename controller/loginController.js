import UserModels from "../models/UserModels.js"
import bcrypt from "bcryptjs"

 const logincontroller=  async (req,res,next)=>{
  

    try{
        const {email,password} =req.body

        if(!email || !password){
            next('provide all fields')
        }


        const User=  await  UserModels.findOne({email})
        if(!User){
           next('invalid email and password')
        }

        // const ispassword=bcrypt.compareSync(password.User.password)
        if(!password){
            res.status(400).json({
            success:false,
            message:'incorrect password'
        })
        }


        res.status(200).json({
            success:true,
            message:'login sucessfully',
            User
        })

    }
    catch(err){


        console.log(err)
        

    }
}

export default logincontroller








// router.post("/login", async (req, res, next) => {

//     try {
//       if (!req.body.email || !req.body.password) {
//         return res.status(400).send("Email and password is required");
//       }
  
//       const { email, password } = req.body;
  
//       let user = await User.findOne({ where: { email } });
  
//       if (!user) {
//         console.log("user not found");
//         return res.status(401).json({ message: "Authentication failed" });
//       }
  
//       const validPassword = await bcrypt.compare(password, user.get("password"));
  
//       if (!validPassword) {
//         console.log("Password is not valid");
//         return res.status(401).json({ message: "Authentication failed" });
//       }
  
//       return res.status(200).json({ message: "Authorization granted!" });
//     } catch (err) {
//       console.log("Err: ", err);
//       res.status(500).json({ error: err });
//     }
//   });
  