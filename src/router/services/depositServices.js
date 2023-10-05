const db = require('../database/db')

const sql_get = 
            `select * from deposit`

const getdeposit = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into deposit(id_user, dolincents, date_entry)
            values ($1, $2, $3)`

const postdeposit = async(params)=>{
    const {id_user, dolincents, date_entry} = params 
    await db.query(sql_insert,[id_user, dolincents, date_entry])
}

module.exports.getdeposit = getdeposit
module.exports.postdeposit = postdeposit
