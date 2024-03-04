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
export const edit = async(req,res)=>{
  const {userName}=req.params
  const {name,lastName,email,plan}=req.body;
  const userFound = await User.findOne({userName})
  userFound.plan=plan;
  userFound.name=name;
  userFound.email=email;
  userFound.lastName=lastName;
  await userFound.save();
  res.send("Update...")
}

export const deleteUser = async(req,res)=>{
  const {userName}=req.params
  const userFound = await User.findOneAndDelete({userName});
  res.send("Delete...")
}

export const users = async (req, res) => {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching users");
    }
  };