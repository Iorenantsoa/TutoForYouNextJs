import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    categorie : {
        type: String , 
        required : true,
        unique : true
    } , 
    formations : [
        {
            type : mongoose.Schema.Types.ObjectId ,  
            ref:"Formation"
        } 
    ]
} , 
    {
        timestamps: true
    })
const Categorie = mongoose.models.Categorie || mongoose.model("Categorie" , categorySchema)

export default Categorie