import { connectDB } from "@/config/connectDb";
import Facture from "@/models/FactureModel";
import { NextResponse } from "next/server";

export async function DELETE(req, res) { 
    const id = res.params.id
 
    try { 
        connectDB()
        const factureToDelete = await Facture.findByIdAndDelete({_id : id}) 

        if(factureToDelete){
           return NextResponse.json({ message : "facture supprimé avec success" ,factureToDelete} , {status:200})

        }else{
            return NextResponse.json({"message":"facture not found"} , {status : 400})
        }
          
    } catch (error) {
        return NextResponse.json({error} , {status : 500}) 
    }
}