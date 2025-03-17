import  mongoose from 'mongoose'
 const userSchema= new mongoose.Schema({
    FullName:{type:String},
    Email:{type:String,required:true,unique:true},
    PhoneNumber:{type:Number},
    Gender:{type:String,enum:["Male","Female","Other"]},
    Address:{type:String},
    Password:{type:String},
    ConfirmPassword:{type:String}
    
 })
 export default userSchema