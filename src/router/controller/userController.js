const userServices = require('../services/userServices')

const getusers = async(req,res,next) => {
    await userServices.getusers()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const postusers = async (req,res,next) =>{
    try{
        await userServices.postusers(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

module.exports.getusers = getusers
module.exports.postusers = postusers
