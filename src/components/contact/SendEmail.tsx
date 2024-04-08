import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chrisxrhodes@gmail.com',
          pass: 'BahiaHonda',
        },
      });

      const mailOptions = {
        from: `${name} <${email}>`,
        to: 'recipient@example.com',
        subject: `New message from ${name}`,
        text: message,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}