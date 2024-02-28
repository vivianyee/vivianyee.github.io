import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { FormData } from "@shared/lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, text }: FormData = JSON.parse(req.body);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: "vivianmyee8@gmail.com", // Change to your recipient
    from: "vivianmyee8@gmail.com", // Change to your verified sender
    subject: `Message from ${name} (${email})`,
    text: text,
  };

  sgMail
    .send(msg)
    .then(() =>
      res
        .status(201)
        .json({ message: `Email has been sent from ${name} (${email})` })
    )
    .catch((err) => res.status(500).json({ error: err }));
}
