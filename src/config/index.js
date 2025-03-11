import mongoose from "mongoose";
export async function dbConnect() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connection...");
    }catch(err){
        return console.log(err)
    }
}