import { Router } from "express";

import {
  Login,
  Logout,
  Profile,
  Register,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/profile",authRequired,Profile);
export default router;
