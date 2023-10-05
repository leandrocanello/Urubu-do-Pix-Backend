const db = require('../database/db')

const sql_get = 
            `select * from withdraw`

const getwithdraw = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into withdraw(id_user, dolincents, date_exit)
            values ($1, $2, $3)`

const postwithdraw = async(params)=>{
    const {id_user, dolincents, date_exit} = params 
    await db.query(sql_insert,[id_user, dolincents, date_exit])
}

module.exports.getwithdraw = getwithdraw
module.exports.postwithdraw = postwithdraw
