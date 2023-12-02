const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const products = require('./products')
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.get('/products', (req, res) => {
    res.status(200).json({
        message: 'Success',
        data: products
      })
})
app.post('/products', (req, res) => {
    res.status(200).json({
        message: 'Success',
        data: 'Data'
      })
})
app.put('/products', (req, res) => {
    res.status(200).json({
        message: 'Success',
        data: 'Data'
      })
})
app.delete('/products', (req, res) => {
    res.status(200).json({
        message: 'Success',
        data: 'Data'
      })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})