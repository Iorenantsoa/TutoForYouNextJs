import User  from "@/models/userModel";
import bcrypt from "bcrypt"
import { connectDB } from "@/config/connectDb"; 
import { NextResponse } from "next/server"; 

export async function GET(req , res) {
     try {
        await connectDB()
        const user = await User.find().populate("coursSuivi") ; 

        
        return NextResponse.json(user , {status : 200}) 
        
    } catch (error) { 
        return NextResponse.json({error } , {status : 200}) 
     }
}
