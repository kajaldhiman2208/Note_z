import express from "express";
import connectDB from "./dbConfig/dbConfig.js";
import cors from "cors";
import bodyParser from "body-parser"
import { User } from "./model/userModel.js";
const app=express();

app.use(cors());
app.use(bodyParser.json());


const PORT=5000;

connectDB();

app.get('/',(req,res)=>{
    res.send("connected");
})

app.post('/api/signup',async (req,res)=>{
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
    await newUser.save();
        res.status(200).send({ message: "Sign up successful" });
    } catch (error) {
        console.log({error:error.message})
        res.status(500).send({ message: 'Error creating user', error: error.message });

    }
    
})

app.listen(PORT,()=>{
    console.log(`server connected at port ${PORT}`)
})