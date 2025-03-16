import express from 'express'
import { getData, signup } from '../Controller/userController.js'
 const  userRouter= express()
// Apis
userRouter.get('/get',getData)
//Signup
userRouter.post('/signup',signup)


export default userRouter