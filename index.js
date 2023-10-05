const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.use(express.json())

require('./src/router/router')(app)

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000,()=>{
    console.log(`Express started at http://localhost:3000`)
})