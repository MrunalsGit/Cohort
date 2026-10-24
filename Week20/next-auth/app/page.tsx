import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home(){
  const session = await getServerSession(authOptions)

  return(
    <div>
      {JSON.stringify(session)}
    </div>  
  )

}

// "use client"

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Main(){
//   return (
//     <SessionProvider >
//       <Home />
//     </SessionProvider>
//   )
// }

// function Home() {
//   const session = useSession()
  
//   if(session.status == "authenticated"){ 
//     return (
//       <div>
//         <button onClick={()=> signOut()}>Sign Out</button>
//         <br />
//         {JSON.stringify(session)}
//       </div>
//     )
//   }
//   return(
//       <div>
//         <button onClick={()=> signIn()}>Sign In</button>
//       </div>
//   )


// }
