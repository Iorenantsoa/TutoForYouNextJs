import User from "@/models/userModel"; 
import { connectDB } from "@/config/connectDb";
import { NextResponse } from "next/server"; 

export async function PUT(req, res) {
    const id = res.params.id
    const { name, contact, email } = await req.json()

    try {
        await connectDB() 
        try {
            const user = await User.findOneAndUpdate({_id: id}, { name, contact })
            return NextResponse.json({ message: "user updated successfully" , user  }, { status: 200 })
            
        } catch (error) {
            return NextResponse.json({ message: "User not found"  }, { status: 400 })
        } 
    } catch (error) {
        return NextResponse.json({message : error} ,{status : 500})
    } 
}