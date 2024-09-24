import Formation from "@/models/FormationModel";
import { connectDB } from "@/config/connectDb";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const id = await res.params.id
    try {
        await connectDB()
        const formation = await Formation.findOne({_id : id}).populate('category')

        return NextResponse.json(formation, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error })
    }
}
