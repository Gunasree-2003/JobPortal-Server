import jobModel from "../models/jobModel.js" 

//post api to create jobs
export const createJobController = async(req,res,next)=>{
    const{company,position}=req.body

    if(!company||!position){
    next('please provide values')
    }

    const newJob={
        company,
        position
    }

    const job=await jobModel.create(newJob)
    res.status(200).json({
        success:true,
        message:"job added successfully"
    })



}



export const getJobController=async (req,res,next)=>{

    try{

        const jobs=await jobModel.find({});
        res.status(200).json({
        success:true,
        jobs,
        totalJobs:jobs.length
})
    }

    catch(err){

    }

}


export const updateJobController=async(req,res,next)=>{

    try{
        const{id}=req.params
        const{worklocation,position}=req.body

        if(!worklocation||!position){
            next('provide all fields')
        }

        const job=await jobModel.findOne({_id:id})

        if(!job){
            next(`no job is found with the id ${id}`)
        }
        console.log("mongodb")
        const updateJob=await jobModel.findOneAndUpdate({_id:id},{
            worklocation:worklocation,
            position:position
        })

        res.status(200).json({
            updateJob
        })

    }

    catch(er){
        next('error in update controller')
    }
}

export const deleteJobController=async(req,res,next)=>{
    try{

        const{id}=req.params

        const job=await jobModel.findOne({_id:id});

        if(!job){
            next('no job found')
        }

        await job.deleteOne({_id:id});

        res.status(200).json({
            message:"job deleted succesfully"
              
        })
    }
    catch(e){

    }
}