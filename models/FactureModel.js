import mongoose from "mongoose";


const FactureSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    formations: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formation"
    } , 
    etat : {
        type : String , 
        required : true,
        default : "Non payée"
    }
},
    {
        timestamps: true
    })
const Facture = mongoose.models.Facture || mongoose.model("Facture", FactureSchema)

export default Facture