const express=require('express')
const app=express()
const path=require('path')
var bodyParser=require('body-parser')
const { json } = require('body-parser')

app.use(bodyParser())

app.get('/',(req,res)=>{
    res.send("First index page")
})

app.use((req,res,next)=>{
    console.log('start')
    next()
})

app.get('/about',(req,res,next)=>{
    res.send("About page")
    console.log('middle')
    next()
})
app.use((req,res,next)=>{
    console.log('end')
    next()
    
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/signup',(req,res)=>{
    res.send("Account created")
    var fname=req.body.fname
    var lname=req.body.lname
    var mobile=req.body.mobile
    console.log(fname)
    console.log(lname)
    console.log(mobile)
   
})
app.listen(3000,()=>{
    console.log(__dirname)
    console.log("server started")
})