import { connectDB } from "@/config/connectDb";
import Facture from "@/models/FactureModel";
import { NextResponse } from "next/server";

export async function GET(req, res) { 
    const id = res.params.id
 
    try { 
        connectDB()
        const facture = await Facture.find({user:id}).populate('formations').populate('user')


        if(facture){
           return NextResponse.json(facture , {status:200})
        }else{
            return NextResponse.json({"message":"facture not found"} , {status : 200})
        }
          
    } catch (error) {
        return NextResponse.json({"message":error} , {status : 500}) 
    }
}