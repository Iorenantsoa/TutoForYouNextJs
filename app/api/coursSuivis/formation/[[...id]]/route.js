import { connectDB } from "@/config/connectDb"; 
import CoursSuivi from "@/models/CoursSuiviModel";
import { NextResponse } from "next/server";

export async function GET(req, res) { 
    const id = res.params.id

    try { 
        connectDB()
        const formation = await CoursSuivi.findOne({ user: id[0], formations: id[1] })
            .populate('formations')
            .populate({
                path: 'formations',
                populate: {
                    path: 'category',
                    model: 'Categorie'  
                }
            })
            .populate('user');
 
        if(formation){
             
            return NextResponse.json({formation : formation.formations , success : true} , { status: 200 });
        } else {
            return NextResponse.json({ "message": "Cours non Trouvé" , success : false }, { status : 200 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({  error , success : "error" }, { status: 500 });
    }
}
