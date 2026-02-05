import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, phone, requirement } = body;

        // Create a transporter using SMTP
        // Note: For Gmail, you need to use an App Password if 2FA is enabled
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your app password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'aananthaltechnologies@gmail.com', // Where you want to receive enquiries
            subject: `New Enquiry from ${name} - ${company}`,
            html: `
                <h2>New Website Enquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Requirement:</h3>
                <p>${requirement}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please check server logs and credentials.' },
            { status: 500 }
        );
    }
}
