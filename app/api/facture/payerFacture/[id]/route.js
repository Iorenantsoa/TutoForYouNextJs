import { connectDB } from "@/config/connectDb"; 
import Facture from "@/models/FactureModel";
import User from "@/models/userModel";
import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
    const id = res.params.id

    try {
        connectDB()
        const factureToUpdate = await Facture.findByIdAndUpdate({ _id: id }, { etat: "Payé" }).populate('user').populate('formations')

        if (factureToUpdate) {

            // console.log(factureToUpdate)
            try {
                const addCoursSuivi = await axios.post('http://localhost:3000/api/coursSuivis', { user: factureToUpdate.user._id, formations: factureToUpdate.formations._id })


                try {
                    const user = await User.findOne({ _id: factureToUpdate.user._id })
                    const coursSuiviAdd = addCoursSuivi.data

                    // console.log(coursSuiviAdd.coursSuivi)

                    user.coursSuivi.push(coursSuiviAdd.coursSuivi)
                    user.save()
                    return NextResponse.json(factureToUpdate, addCoursSuivi, { status: 200 })
                } catch (error) {
                    return NextResponse.json({message : error})
                }
            } catch (error) {
                return NextResponse.json(error)
            }

        } else {
            return NextResponse.json({ "message": "facture not found" }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ "message": "facture not found" }, { status: 500 })
    }
}