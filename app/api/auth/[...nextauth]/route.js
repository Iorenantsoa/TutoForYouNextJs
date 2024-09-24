import { connectDB } from "@/config/connectDb"
import User from "@/models/userModel"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const bcrypt = require('bcrypt');

export async function login(credentials) {
    console.log("je suis dans login")
    try {
        connectDB()
        const user = await  User.findOne({email : credentials.email})
        if(!user){
            throw new Error("L'email n'existe pas")
            
        }
        const isCorrect = await bcrypt.compare(credentials.password , user.password)
        if(!isCorrect) {
            throw new Error("Mot de passe incorrecte")
        }
        return user

    } catch (error) {
        console.log("Erreur pendant la connexion" )
        throw new Error("Something went wrong")
    }
}


export const authOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                
                try {
                    const user = await login(credentials)

                    console.log("this is th user = ", user)

                    return user;
                } catch (error) {
                    console.log("Failed to login :", error)
                    return null;
                }
            }
        })
    ] , 
    callbacks: {
        
        async jwt({token ,user}){
            if(user){
                token.name = user.name ; 
                token.email = user.email;
                token.contact = user.contact ; 
                token.id = user.id
            }
            console.log("this is the token " , token)
            return token
        } , 
        async session ({session , token}){
            if(token){
                session.user.name = token.name ; 
                session.user.email = token.email;
                session.user.contact  = token.contact ;
                session.user.id = token.id
            }
            console.log("this is the session " , session)
            return session
        }
    }
}




const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }