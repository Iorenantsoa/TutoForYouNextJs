import mongoose from "mongoose";


const CoursSuiviSchema = mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    formations: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formation"
    },
    progression: { 
        type: String, 
        default : 0
    },
    certificat: {
        type: Boolean,
        default : false
    }
},
    {
        timestamps: true
    })
const CoursSuivi = mongoose.models.CoursSuivi || mongoose.model("CoursSuivi", CoursSuiviSchema)

export default CoursSuivi