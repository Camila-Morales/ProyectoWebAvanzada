import express from "express"
import { connectDB } from "./libs/DB.js";
import email from "./routes/email.routes.js"
import user from "./routes/user.routes.js"
import auth from './routes/auth.routes.js'
import calendar from './routes/calendar.routes.js'
import cors from 'cors'
import cookieParser from "cookie-parser";

connectDB()
const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Server ON")
})
app.use('/api',email)
app.use('/api',auth)
app.use('/api',user)
app.use('/api',calendar)

app.listen(2025,()=>{
    console.log("Servidor in http://localhost:2025")
})