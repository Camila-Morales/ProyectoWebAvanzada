import { Router } from "express";

import {
  Login,
  Logout,
  Profile,
  Register,
  verifyToken,
  deleteAuth
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/profile",authRequired,Profile);
router.get('/verify',verifyToken);
router.delete('/delete/:userName',deleteAuth)
export default router;
