import mongoose from "mongoose";

// // import express from "express";
// // const app=express();

// //yh tb use krna hai jab index.js mai likhna ho

// // ;( async ()=>{
// //     try {
// //         await mongoose.connect(`${process.env.MONGO_URL}`)
// //         app.on("error",(error: any)=>{
// //             console.log("Err",error);
// //             throw error
// //         })
// //         app.listen(process.env.PORT,()=>{
// //             console.log(`Server on port ${process.env.PORT}`);
// //         })
// //     } catch (error) {
// //         console.error("Error:",error);
// //         throw error;
// //     }
// // })()

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/newnote");
        console.log("connected to mongo DB")
    } catch (error) {
        console.log("Error:",error);
        throw error
    }
}

export default connectDB;




