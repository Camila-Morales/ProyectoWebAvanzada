import { Resend } from "resend";
import fs from 'fs';
const htmlContent = fs.readFileSync('./src/templates/index.html', 'utf-8');
const resend = new Resend("re_doe9e5Rx_AjUoZcujisKP3zWvnCtjcDod");

export const sendEmail = async (email) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "GymRat Informacion",
    html: htmlContent,
  });

  if (error) {
    return console.error({ error });
  }
  console.log({ data });
};