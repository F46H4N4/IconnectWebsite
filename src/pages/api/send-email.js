import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS and Method Handling
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Strictly enforce POST method
  if (req.method !== 'POST') {
    console.error('Invalid method:', req.method);
    return res.status(405).json({ 
      message: 'Method Not Allowed', 
      receivedMethod: req.method 
    });
  }

  // Log incoming request body for debugging
  console.log('Received Request Body:', req.body);

  // Destructure request body with safety checks
  const { 
    fullName, 
    email, 
    phone, 
    message, 
    captchaToken 
  } = req.body || {};

  // Validate input
  if (!fullName || !email || !phone || !message) {
    console.error('Missing required fields');
    return res.status(400).json({ 
      message: 'Missing required fields',
      receivedData: Object.keys(req.body || {})
    });
  }

  // CAPTCHA Validation (Optional but recommended)
  if (captchaToken) {
    try {
      const captchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=6LeAUpcqAAAAACJHgZ45kpf9VqddYsJwdjV41J3A&response=${captchaToken}`
        }
      );

      const captchaResult = await captchaResponse.json();

      if (!captchaResult.success) {
        console.error('CAPTCHA Validation Failed:', captchaResult);
        return res.status(400).json({ 
          message: 'CAPTCHA validation failed',
          details: captchaResult['error-codes']
        });
      }
    } catch (captchaError) {
      console.error('CAPTCHA Verification Error:', captchaError);
    }
  }

  // Email Transporter Configuration
  const transporter = nodemailer.createTransport({
    host: 'mail.iconnect-kw.com',
    port:  465,
    secure: true,
    auth: {
      user: 'info@iconnect-kw.com',
      pass: 'GanKyG4Kolyx'
    },
    tls: {
      rejectUnauthorized: false  // Use cautiously in production
    }
  });

  try {
    // Send Email
    const info = await transporter.sendMail({
      from: 'info@iconnect-kw.com',
      to: 'farhana2224u@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div>
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `
    });

    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ 
      message: 'Email sent successfully', 
      messageId: info.messageId 
    });

  } catch (emailError) {
    console.error('Email Sending Error:', emailError);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: emailError.message,
      stack: emailError.stack
    });
  }
}