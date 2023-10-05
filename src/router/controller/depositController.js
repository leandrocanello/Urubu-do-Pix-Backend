const depositServices = require('../services/depositServices')

const getdeposit = async(req,res,next) => {
    await depositServices.getdeposit()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const postdeposit = async (req,res,next) =>{
    try{
        await depositServices.postdeposit(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

module.exports.getdeposit = getdeposit
module.exports.postdeposit = postdeposit
