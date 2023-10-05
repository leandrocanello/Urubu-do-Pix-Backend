const dolsServices = require('../services/dolsServices')

const getdols = async(req,res,next) => {
    await dolsServices.getdols()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const postdols = async (req,res,next) =>{
    try{
        await dolsServices.postdols(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

module.exports.getdols = getdols
module.exports.postdols = postdols
