import mongoose from 'mongoose'
let dburl='mongodb://127.0.0.1:27017/E-Commerce'
  async function ConnectDatabase(){
    try {
        await mongoose.connect(dburl)
        console.log("Database is connected");
        
        
    } catch (error) {
        console.log(error);
        
    }
  }
  export default ConnectDatabase