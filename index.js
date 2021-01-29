const express = require('express')
const userRoute = require('./router')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 7777


//middleware
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use('/user',userRoute)



app.get("*",(req,res)=>{
    res.send('404 Not Found !')
})


app.listen(port,()=>{
    console.log('Server is Running on port '+port)
})