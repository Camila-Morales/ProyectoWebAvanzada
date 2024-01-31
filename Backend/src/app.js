import express from "express"
import email from "./routes/email.routes.js"
import { connectDB } from "./libs/DB.js";
import auth from './routes/auth.routes.js'
import cors from 'cors'

connectDB()
const app = express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server ON")
})
app.use('/api',email)
app.use('/api',auth)

app.listen(2025,()=>{
    console.log("Servidor in http://localhost:2025")
})