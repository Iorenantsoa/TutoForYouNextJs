import Formation from "@/models/FormationModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/config/connectDb";
import Categorie from "@/models/CategorieModel";


export async function POST(req, res) {
    try {
        connectDB()

        const { formation, category, typeFormation, difficulte, prix, inscrits, duree, lienVideoDemo, ImgPoster, cible, prerequis, programme, formateur } = await req.json()

        let formationCreated = null
        const categoryFound = await Categorie.findOne({ _id: category })
        if (categoryFound) {
            try {
                formationCreated = await Formation.create({ formation, category, typeFormation, difficulte, prix, inscrits, duree, lienVideoDemo, ImgPoster, cible, prerequis, programme, formateur })
            } catch (error) {
                return NextResponse.json({ error })
            }
            try {
                categoryFound.formations.push(formationCreated)
                categoryFound.save()
            } catch (error) {
                return NextResponse.json({ error })
            }

        }

        return NextResponse.json({ message: "Formation Crééé avec success", formationCreated }, { status: 201 })
    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error }, { status: 500 })
        
    }
}

export async function GET(req, res) {
    try {
        connectDB()
        const formation = await Formation.find().populate('category')
        if (formation) {
            return NextResponse.json({ formation }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Aucune" }, { status: 200 })
        }
    } catch (error) {
        console.log("Error lors de la registration ", error)
        return NextResponse.json({ error }, { status: 500 })
    }
}



