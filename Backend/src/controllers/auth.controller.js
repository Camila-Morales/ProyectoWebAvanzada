import Auth from "../models/Auth.model.js";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

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
    const newUser = new User({
      userName: newUserName,
      name,
      lastName,
      email,
      birthdate,
      gender,
      plan:0
    });
    const AuthSaved = await newAuth.save();
    await newUser.save();
    const token = await createAccessToken({ id: AuthSaved._id });
    res.cookie("token", token);
    res.json({
      message: "Usuario Creado",
      token: token,
      userName: newUserName,
    });
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
    if (!isMatch) return res.status(400).json(["Password Incorrect"]);
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({ message: "Login User", userName: userFound.userName });
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

export const Profile = async (req, res) => {
  //cambiar ese auto por el bd Usuarios
  const user = await Auth.findById(req.user.id);
  if (!user) res.status(400).json({ message: "User not found" });

  return res.send({
    userName: user.userName,
  });
};
export const verifyToken = (req, res) => {
  const { token } = req.cookies;
  if (!token) return req.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, process.env.SECRETE_KEY, async (err, user) => {
    if (err) return res.send(401).json({ message: "Unauthorized" });
    const authFound = await Auth.findById(user.id);
    if (!authFound) res.send(401).json({ message: "Unauthorized" });

    return res.json({
      userName: authFound.userName,
    });
  });
};
