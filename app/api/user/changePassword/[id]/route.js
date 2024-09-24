import User from "@/models/userModel";
import { connectDB } from "@/config/connectDb";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');

export async function PUT(req, res) {
    try {
        const id = res.params.id
        const { old_password, password } = await req.json()

        connectDB()
        const user = await User.findOne({ _id: id })
        if (user) { 
            try {
                const isCorrect = await bcrypt.compare(old_password, user.password)
                if (!isCorrect) {
                    return NextResponse.json({ error: "l'ancien mot de passe est incorrecte" }, { status: 400 })
                }

                try {

                    const hashedPassword = await bcrypt.hash(password,10) ; 
                    const user = await User.findOneAndUpdate({ _id:id}, {password : hashedPassword})
                    return NextResponse.json({ message: "Mis à jour du mot de passe effectuée", user }, { status: 200 })

                } catch (error) {
                    return NextResponse.json({ error: "Une erreur s'est produite" }, { status: 500 })
                }


            } catch (error) {
                return NextResponse.json({ error: "Une erreur s'est produite"  }, { status: 400 })
            } 

        } else {
            return NextResponse.json({ error: "L'utiisateur n'existe pas"  }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 }) 
    }
}