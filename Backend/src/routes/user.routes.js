import { Router } from "express";
import { profile,plan } from "../controllers/user.controller.js";
const route = Router();

route.get('/user/:userName',profile);
route.put('/user/:userName',plan)
export default route;