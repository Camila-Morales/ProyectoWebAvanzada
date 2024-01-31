import { Resend } from "resend";
import env from "dotenv";
import fs from 'fs';
env.config()

const htmlContent = fs.readFileSync('./src/templates/index.html', 'utf-8');
const resend = new Resend(process.env.API_KEY_EMAIL);

export const sendEmail = async (email) => {
  const { data, error } = await resend.emails.send({
    from: "gymApp@gymmart.online",
    to: [email],
    subject: "GymRat Informacion",
    html: htmlContent,
  });

  if (error) {
    return console.error({ error });
  }
  console.log({ data });
};