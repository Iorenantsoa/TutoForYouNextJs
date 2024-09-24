import { connectDB } from "@/config/connectDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const id = res.params.id
    try { 
        connectDB()
        const user = await User.findOne({_id:id})
        if(user){
           return NextResponse.json(user , {status:200})
        }else{
            return NextResponse.json({"message":"user not found"} , {status : 200})
        }
          
    } catch (error) {
        return NextResponse.json({"message":"user not found"} , {status : 500}) 
    }
}