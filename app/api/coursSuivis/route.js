import { NextResponse } from "next/server";
import { connectDB } from "@/config/connectDb"; 
import CoursSuivi from "@/models/CoursSuiviModel";


export async function POST(req, res) {
    try {
        connectDB()

        const { user, formations } = await req.json()

        const coursSuivi = await CoursSuivi.create({ user, formations })

        if (coursSuivi){ 
            return NextResponse.json({ message: "cours suivis avec success" , coursSuivi }, { status: 201 })
        }else{
            return NextResponse.json({ message: "une erreur s'est produite"  }, { status: 400 })

        }
    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}

export async function GET(req, res) {
    try {
        connectDB()

        const coursSuivi = await CoursSuivi.find().populate('formations').populate('user')
        if (coursSuivi) {
            return NextResponse.json({ coursSuivi }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Aucun Cours suivi trouvé" }, { status: 200 })
        }

    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}
