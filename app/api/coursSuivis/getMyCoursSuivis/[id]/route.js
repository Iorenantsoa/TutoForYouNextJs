import { connectDB } from "@/config/connectDb"; 
import CoursSuivi from "@/models/CoursSuiviModel";
import { NextResponse } from "next/server";

export async function GET(req, res) { 
    const id = res.params.id
 
    try { 
        connectDB()
        const coursSuivi = await CoursSuivi.find({user:id}).populate('formations').populate('user')
        

        if(coursSuivi){
           return NextResponse.json(coursSuivi , {status:200})
        }else{
            return NextResponse.json({"message":"Cours not found"} , {status : 200})
        }
          
    } catch (error) {
        return NextResponse.json({"message":error} , {status : 500}) 
    }
}