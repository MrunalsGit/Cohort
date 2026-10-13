import { Client } from "pg";
const pgClient = new Client("postgresql://neondb_owner:npg_a5VbAdfm7jBD@ep-muddy-glade-b5egeh7v-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

async function goLive(){
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users")
    console.log(response)
}
goLive()