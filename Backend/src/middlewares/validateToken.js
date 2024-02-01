import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "No Token,authorization" });
  jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user=decoded
    next();
  });
};
