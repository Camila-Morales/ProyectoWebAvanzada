import express from "express"
import email from "./routes/email.js"

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server ON")
})
app.use('/api',email)

app.listen(2025,()=>{
    console.log("Servidor in http://localhost:2025")
})