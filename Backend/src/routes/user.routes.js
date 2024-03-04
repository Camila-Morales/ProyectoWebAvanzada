import { Router } from "express";
import { profile,plan,users, edit,deleteUser } from "../controllers/user.controller.js";
const route = Router();

route.get('/user/:userName',profile);
route.put('/user/:userName',plan)
route.put('/user/edit/:userName',edit)
route.get('/user',users)
route.delete('/user/:userName',deleteUser)
export default route;