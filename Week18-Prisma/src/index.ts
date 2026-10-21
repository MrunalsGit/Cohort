import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const adapter = new PrismaPg({connectionString:process.env.DATABASE_URL})

const prisma = new PrismaClient({adapter})

import express from "express"
const app = express()

app.use(express.json())

app.get("/", async(req,res)=>{
    const { name, password } = req.body;
    prisma.user.create({
        data:{
            name,
            password
        }
    })
})