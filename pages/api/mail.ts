import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;  

  mail.send({
    to: 'dominici.guillaume@gmail.com',
    from: 'dominici.guillaume@gmail.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).then(() => {
    return res.status(200).json({ status: 'Ok' });
  });
}
