import express from 'express'
import ConnectDatabase from './config/db.js'
import userRouter from './Routes/UserRouter.js'
import cors from 'cors'

const app=express()
//middlewares
app.use(express.json())//  conversion of json to normal string or object
app.use(express.urlencoded({extended:true}))
app.use(cors())// to binding frontend and backend
//Api's
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