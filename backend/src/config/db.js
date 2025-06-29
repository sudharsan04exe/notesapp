import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectdb= async()=>{
    try{
      await  mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}