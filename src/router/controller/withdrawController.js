const withdrawServices = require('../services/withdrawServices')

const getwithdraw = async(req,res,next) => {
    await withdrawServices.getwithdraw()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const postwithdraw = async (req,res,next) =>{
    try{
        await withdrawServices.postwithdraw(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

module.exports.getwithdraw = getwithdraw
module.exports.postwithdraw = postwithdraw
