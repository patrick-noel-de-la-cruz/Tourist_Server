const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const apiRoutes = require('./src/routes')
const dbconnection = require('./src/config/database.config');

const models = require('./src/models')
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
dbconnection()
app.use('/photos/product', express.static('public/uploads'))
app.use('/', apiRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})