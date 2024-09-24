import Categorie from "@/models/CategorieModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/config/connectDb";

   
export async function POST(req, res) {
    try {
        connectDB()

        const { categorie, formations } = await req.json()

        await Categorie.create({ categorie, formations })


        return NextResponse.json({ message: "Categorie Créée avec success" }, { status: 201 })
    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}

export async function GET(req, res) {
    try {
        connectDB()

        const categorie = await Categorie.find()
        if (categorie) {
            return NextResponse.json({ categorie }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Aucune categorie trouvée" }, { status: 200 })
        }

    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}