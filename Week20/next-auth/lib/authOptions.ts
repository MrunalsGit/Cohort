import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers : [
        CredentialsProvider({
            name : "credentials",
            credentials : {
                name : {label : "Email", type : "text", placeholder : "abc@gmail.com"},
                password : {label : "Password", type : "password", placeholder:"Enter password"}
            },
            async authorize (credentials, req){
                const user = {
                    name : "b",
                    password : "b",
                    id : "2"
                }
                return user
            }
        }),
        GoogleProvider ({
            clientId : "ds",
            clientSecret : "dfbg"
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
}