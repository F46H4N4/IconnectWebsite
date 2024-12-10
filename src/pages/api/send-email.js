import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, phone, message, captchaToken } = req.body;

  // Validate CAPTCHA server-side
  try {
    const captchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=6LeAUpcqAAAAACJHgZ45kpf9VqddYsJwdjV41J3A&response=${captchaToken}`
        }
      );
    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return res.status(400).json({ message: 'CAPTCHA validation failed' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'CAPTCHA validation error' });
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.iconnect-kw.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@iconnect-kw.com',
      pass: 'GanKyG4Kolyx'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    const info = await transporter.sendMail({
      from: 'info@iconnect-kw.com',
      to: 'farhana2224u@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        </div>
      `
    });

    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
