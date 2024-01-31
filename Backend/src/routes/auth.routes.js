import {Router} from "express";
const router = Router();

router.post("/login",(req,res)=>{
    res.send("Hola desde Usuarios");
})
router.post("/register",(req,res)=>{
    res.send("Hola desde Usuarios");
})

export default router;

