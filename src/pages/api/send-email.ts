import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_isKkBzkN_CYD7RYWs2B6f8vsdap5yBw8h');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { from, to, subject, html } = req.body;

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};