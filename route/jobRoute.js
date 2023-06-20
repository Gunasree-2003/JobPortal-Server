import express from 'express'
import { createJobController, deleteJobController, getJobController, updateJobController} from '../controller/jobController.js'



const route=express.Router()
route.post('/create-job',createJobController)

route.post('/get-job',getJobController)

route.patch('/update-job/:id',updateJobController)


route.delete('/delete-job/:id',deleteJobController)

export default route