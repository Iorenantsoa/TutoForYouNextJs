import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Veuillez entrer votre nom et prénom"]
    },
    contact: {
        type: String,
        required: [true, "Veuillez entrer votre contact"],
        unique: [true, "Le contact éxiste déjà"]
    },
    email: {
        type: String,
        required: [true, "Veuillez entrer votre email"],
        unique: [true, "L'email éxiste déjà"]
    },
    coursSuivi: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CoursSuivi"
        }
    ],
    password: {
        type: String,
        required: [true, "Veuillez entrer votre mot de passe"]
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; 