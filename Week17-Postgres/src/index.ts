import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config({ path: "../.env" });
const postgresUrl = process.env.postgresUrl
const pgClient = new Client({connectionString: postgresUrl});

async function goLive(){
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users")
    console.log(response)
}
goLive()