import userModel from "../Model/userModel.js";
import bcrypt from 'bcrypt'
let saltRound=10
//getting Data from the Database
  export const  getData= async function(req,res){
    try {
       let data= await userModel.find()
       res.status(200).send(data)
    } catch (error) {
         res.status(500).send({msg:"there is some error"})
    }
  }
  //User Registration
   export const  signup= async function(req,res){
    try {
        
       let data= req.body
       let password=data.Password;
       let hashedpassword=await bcrypt.hash(password,saltRound)
      let userDetails= await userModel.insertOne({...data,Password:hashedpassword})
      console.log(userDetails);
      
       res.status(201).send("Data inserted succesfully")
    } catch (error) {
        res.status(500).send({msg:"internal server error"})
    }

   }
  //  User Login
   export const signin= async function (req,res){
    try {
      let  isEmail=req.body.Email;
      let  isPassword=req.body.Password
      if(isEmail && isPassword){
        let verifyEmail=await userModel.findOne({Email:isEmail})
        if(verifyEmail){
           let verfiyPassword=await  bcrypt.compare(isPassword,verifyEmail.Password)
           if(verfiyPassword){
              res.status(200).send("User Login succesfully")
           }
           else{
            res.status(400).send({msg:"Wrong password"})

           }
        }
        else{
         res.status(404).send({msg:"User not found"})
        }

      }
      else{
        res.status(400).send({msg:"Please fillup allthe field"})
     
      }

        
    } catch (error) {
      res.status(500).send({msg:"Something went wrong"})
        
    }
   }
