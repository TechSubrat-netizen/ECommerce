import userModel from "../Model/userModel.js";
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
        let data=req.body;
        await userModel.insertOne(data)
        res.status(201).send("Data inserted succesfully")
    } catch (error) {
        res.status(500).send({msg:"Something is wrong"})
    }
   }
   //User Login
//    export const signin= async function (req,res){
//     try {
        
//     } catch (error) {
        
//     }
//    }
