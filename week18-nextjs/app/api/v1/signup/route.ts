import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
// import { PrismaClient } from "@/app/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });
// const prisma = new PrismaClient({adapter})

export async function POST(req : NextRequest){
    try{
        const body = await req.json()

        const user = await prisma.user.create({
            data : {
                userName : body.name,
                password : body.password
            }
        })

        return NextResponse.json({
            "message" : "User signed up"
        })
    }
    catch(e){
        console.error(e);

        return NextResponse.json(
            { message: "Signup failed. Username may already exist." },
            { status: 409 }
        );
    }
}