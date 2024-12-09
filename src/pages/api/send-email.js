import nodemailer from 'nodemailer';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { email, fullName, phone, message } = req.body;

        try {
            if (!fullName || !email || !phone || !message) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            // Set up transporter using environment variables
            const transporter = nodemailer.createTransport({
                host: 'mail.iconnect-kw.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'info@iconnect-kw.com',
                },
                tls: {
                    rejectUnauthorized: false,
                }
            });

            const mailOptions = {
                from: 'info@iconnect-kw.com',
                to: 'farhana2224u@gmail.com',
                subject: 'Contact Us Form Submission',
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
                text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
            };

            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({
                message: 'Email Sent Successfully',
                info: info.response
            });

        } catch (error) {
            console.error('Detailed Email Error:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });

            res.status(500).json({
                message: 'Internal Server Error: Failed to Send Email',
                error: error.message
            });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
