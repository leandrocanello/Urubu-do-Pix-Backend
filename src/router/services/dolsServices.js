const db = require('../database/db')

const sql_get = 
            `select * from dols`

const getdols = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into dols (iduser, dolincents)
            values ($1, $2)`

const postdols = async(params)=>{
    const {iduser, dolincents} = params 
    await db.query(sql_insert,[iduser, dolincents])
}

module.exports.getdols = getdols
module.exports.postdols = postdols
