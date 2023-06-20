import express from 'express'
import  {registercontroller} from "../controller/authController.js"
import logincontroller from '../controller/loginController.js'


const route=express.Router()
route.post('/register',registercontroller)

route.post('/login',logincontroller)

export default route