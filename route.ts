// import connectDB from "../../dbConfig/dbConfig";
// import { User } from "../../model/userModel";
// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

// connectDB();

// export async function POST(request:NextRequest){
//     try {
//         const reqBody=await request.json();
//         const {username,email,password} = reqBody
//     } catch (error:any) {
//         return NextResponse.json({error:error.message},
//             {status:500})
//     }
// }










// import connectDB from "../../dbConfig/dbConfig";
// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import {User} from "../../model/userModel";

// connectDB;

// export async function POST(request:NextRequest){
//     try {
//         const reqBody = await request.json();
//         const {username,email,password}=reqBody;


//        const user= await User.findOne({email})
//        if(user){
//         return NextResponse.json({error:"user already exists"},{status:400});
//        }

//        const salt=await bcryptjs.genSalt(10);
//        const hashPassword=await bcryptjs.hash(password,salt)


//        const newUser=new User({
//         username,
//         email,
//         password:hashPassword
//        })

//        const savedUser=await newUser.save();

//        return NextResponse.json({
//         message:"User created successfully",
//         success:true
//     })

//     } catch (error) {
//         return NextResponse.json({error:error.message},{status:500});
//     }
// }




import connectDB from '../dbConfig/dbConfig';
import {User} from '../model/userModel';
import bcryptjs from 'bcryptjs'; 
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


connectDB;


export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json();
        const {username,email,password}=reqBody;

        const user= await User.findOne(email);
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400});
        }

        const salt=await bcryptjs.genSalt(10);
        const hashPassword=await bcryptjs.hash(password,salt);

        const newUser=new User({
            username,
            password:hashPassword,
            email
        })

        const saveUser=newUser.save();

        return NextResponse.json({message:"User Created "});

        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}