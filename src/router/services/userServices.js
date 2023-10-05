const db = require('../database/db')

const sql_get = 
            `select * from users`

const getusers = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into users(userr)
            values ($1)`

const postusers = async(params)=>{
    const {name} = params 
    await db.query(sql_insert,[name])
}

module.exports.getusers = getusers
module.exports.postusers = postusers
