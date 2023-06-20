const errormiddleware=(err,req,res,next)=>{
    next()
    res.status(500).send({
        success:false,
        message:'there is an error',
        err
    })

}

export default errormiddleware