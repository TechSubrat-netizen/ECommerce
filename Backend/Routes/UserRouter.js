import express from 'express'
import { getData, signin, signup } from '../Controller/userController.js'
 const  userRouter= express()
// Apis
userRouter.get('/get',getData)
//Signup
userRouter.post('/signup',signup)
//signin
userRouter.post('/signin',signin)


export default userRouter