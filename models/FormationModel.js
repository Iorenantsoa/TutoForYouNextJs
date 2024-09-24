import mongoose from "mongoose"

const formationSchema = mongoose.Schema({


    formation: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
        required : true
    },
    typeFormation: {
        type: String,
        required: true
    },
    difficulte: {
        type: String,
        required: true
    }, 
    prix : {
        type : Number , 
        required : true 
    } , 
    inscrits : {
        type : Number , 
        required : true
    },
    duree: {
        type: String,
        required: true
    },
    lienVideoDemo: {
        type: String,
        required: true
    },
    ImgPoster: {
        type: String,
        required: true
    },
    cible: [{
        type: String
    }],
    prerequis: [{
        type: String,
    }],
    programme: [{
        type: String,
        required: true
    }],
    formateur: {
        type: String,
    }

})

const Formation = mongoose.models.Formation || mongoose.model("Formation", formationSchema);

export default Formation; 
