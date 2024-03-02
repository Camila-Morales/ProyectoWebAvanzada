import User from "../models/User.model.js";

export const profile = async (req,res)=>{
    const {userName}=req.params;
    const userFound = await User.findOne({userName})
    res.json(userFound)
}

export const plan = async(req,res)=>{
    const {userName}=req.params
    const {plan}=req.body;
    const userFound = await User.findOne({userName})
    userFound.plan=plan;
    await userFound.save();
    res.send("Update...")
}