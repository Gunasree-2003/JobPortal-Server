import express from 'express'
import { createJobController, deleteJobController, getJobController, updateJobController} from '../controller/jobController.js'



const route=express.Router()
route.post('/createjob',createJobController)

route.post('/getjob',getJobController)

route.patch('/updatejob/:id',updateJobController)


route.delete('/deletejob/:id',deleteJobController)

export default route
