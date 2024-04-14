import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_Pv1KARyr_KxHPVdCkb3xRWSQYWaU7y2iQ');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Immediately return for non-POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }

  const { to, subject, html } = req.body;
  const from = to;
  resend.emails.send({
    from,
    to,
    subject,
    html,
  }).then(() => {
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  }).catch(error => {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  });
}
