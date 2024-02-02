import Auth from "../models/Auth.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const Register = async (req, res) => {
  try {
    const { name, lastName, email, password, birthdate, gender } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    let newUserName = name.slice(0, 3) + lastName;
    let existingUser = await Auth.findOne({ userName: newUserName });
    newUserName = name.slice(0, 3) + lastName + "0";
    let i = 0;
    while (existingUser != null) {
      i++;
      newUserName.slice(0, -1);
      newUserName = newUserName + i;
      existingUser = await Auth.findOne({ userName: newUserName });
    }
    const newAuth = new Auth({ userName: newUserName, password: passwordHash });
    const AuthSaved = await newAuth.save();
    const token = await createAccessToken({ id: AuthSaved._id });
    res.cookie("token", token);
    res.send("Usuario Creado");
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userFound = await Auth.findOne({ userName });
    if (!userFound) return res.status(400).json(["User not found"]);
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalide Credential" });
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({ message: "Login User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const Logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout" });
};

export const Profile = async(req, res) => {
  //cambiar ese auto por el bd Usuarios
  const user = await Auth.findById(req.user.id);
  if (!user) res.status(400).json({ message: "User not found" });

  return res.send({
    userName:user.userName
  });
};
