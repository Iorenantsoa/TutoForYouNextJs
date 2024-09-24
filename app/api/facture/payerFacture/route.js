import Facture from "@/models/FactureModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/config/connectDb";


export async function POST(req, res) { 
    try {
        connectDB()

        const { user, formations } = await req.json()

        await Facture.create({ user, formations })


        return NextResponse.json({ message: "Facture Créé avec success" }, { status: 201 })

    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}

export async function GET(req, res) {
    try {
        connectDB()

        const facture = await Facture.find().populate('formations').populate('user')
        if (facture) {
            return NextResponse.json({ facture }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Aucun facture trouvé" }, { status: 200 })
        }

    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error })
    }
}