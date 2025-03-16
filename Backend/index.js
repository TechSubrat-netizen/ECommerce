import express from 'express'
import ConnectDatabase from './config/db.js'
import userRouter from './Routes/UserRouter.js'

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello from server")
})
// Routes
app.use('/user',userRouter)





// Database connection
ConnectDatabase()


//To run  server
 app.listen(5000,"localhost",()=>{
    console.log("server is running on http://localhost:5000");
 })