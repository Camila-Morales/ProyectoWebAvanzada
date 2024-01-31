import { Router } from "express";
import { sendEmail } from "../libs/sendEmail.js";

const router = Router();

router.post("/email", async (req, res) => {
  const { name, email } = req.body;
  try {
    await sendEmail(email);
    res.send("Enviado 😎🫵")
  } catch (err) {
    console.log(err);
  }
});
router.get("/email", (req, res) => {
  res.send("Envio de correo Activo");
});

export default router;
