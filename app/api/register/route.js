import User from "@/models/userModel";
import { NextResponse } from "next/server"; 
import { connectDB } from "@/config/connectDb";
const bcrypt = require('bcrypt');

export async function POST (req) {  
    try {
        await connectDB() 

        const {name , contact , email , password , confirm_password} = await req.json()

        const exists = await User.findOne({$or : [{email} , {contact}]}) ; 
        if(exists){
            return NextResponse.json({message : "Email ou contact est déjà utilisé" , success : false} , {status : 400});  
        }

        const hashedPassword = await bcrypt.hash(password,10) ; 

        await User.create({name , contact , email , formation : [] ,password :hashedPassword})

        return NextResponse.json({message : "Utilisateur ajouté avec success" , success : true} , {status : 201}); 
    } catch (error) {
        console.log("Error lors de la registration " , error)
    }
}