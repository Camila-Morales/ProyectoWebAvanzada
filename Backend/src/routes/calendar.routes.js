import { Router } from "express";
import { addCalendar, data } from "../controllers/calendar.contoller.js";

const route = Router();

route.get('/calendar/:userName',data);
route.post('/calendar',addCalendar)
export default route;