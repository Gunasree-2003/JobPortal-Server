import express from 'express'
import dotenv from 'dotenv'
import nodemon from 'nodemon';
import mongoose from 'mongoose';
import connectDB from './database/conn.js';
import route from './route/authRoute.js';
import cors from 'cors'
import errormiddleware from './middleware/errormiddleware.js';
import jobRoute from './route/jobRoute.js'


const app=express();

dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use("/api",route)
app.use("/api",jobRoute)

app.use(errormiddleware)


//mongodb connection
connectDB()

//port
const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`Listening to the ${PORT}....`)
})


