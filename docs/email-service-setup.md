# Email Service Setup Guide

This guide explains how to set up the email functionality for your portfolio contact form.

## Overview

The email service is designed to send emails from your contact form to your email address (`segnigirma11@gmail.com`). It includes multiple fallback methods to ensure reliability.

## Files Created

1. **`lib/email-service.ts`** - Main email service class
2. **`app/api/send-email/route.ts`** - API endpoint for sending emails
3. **Updated `components/contact-section.tsx`** - Now uses the email service

## How It Works

### 1. Primary Method: API Endpoint
- Contact form submits to `/api/send-email`
- API validates the data and processes the email
- Currently logs the email (you need to integrate with a real email service)

### 2. Fallback Method: Email Client
- If the API fails, opens the user's default email client
- Pre-fills the email with form data
- User sends the email manually

## Setup Instructions

### Step 1: Basic Setup (Current State)
The current setup will log emails to the console. To see this:
1. Fill out the contact form
2. Check your browser's developer console
3. Check your terminal where Next.js is running

### Step 2: Integrate Real Email Service

#### Option A: SendGrid (Recommended)
1. Sign up for [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Verify your sender email
4. Update the API route:

```typescript
// In app/api/send-email/route.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const msg = {
  to: recipientEmail,
  from: 'your-verified-email@domain.com',
  subject: `Portfolio Contact: ${subject}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
}

await sgMail.send(msg)
```

#### Option B: Nodemailer with Gmail
1. Enable 2-factor authentication on your Gmail
2. Generate an app-specific password
3. Install nodemailer: `npm install nodemailer`
4. Update the API route:

```typescript
// In app/api/send-email/route.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: recipientEmail,
  subject: `Portfolio Contact: ${subject}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
})
```

#### Option C: AWS SES
1. Set up AWS SES
2. Verify your email domain
3. Install AWS SDK: `npm install @aws-sdk/client-ses`
4. Update the API route with AWS SES integration

### Step 3: Environment Variables
Create a `.env.local` file in your project root:

```bash
# For SendGrid
SENDGRID_API_KEY=your_api_key_here

# For Gmail
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_app_password

# For AWS SES
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
```

## Testing

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (if using real email service) or console logs

## Security Considerations

- Never expose API keys in client-side code
- Use environment variables for sensitive information
- Validate all input data (already implemented)
- Consider rate limiting for the API endpoint
- Use HTTPS in production

## Troubleshooting

### Common Issues

1. **"Email service not configured"**
   - Check your environment variables
   - Ensure the API route is working

2. **"Failed to send email"**
   - Check your email service credentials
   - Verify your sender email is verified
   - Check API rate limits

3. **Form not submitting**
   - Check browser console for errors
   - Verify the API endpoint is accessible
   - Check network tab for failed requests

### Debug Mode
Add console logs in the API route to debug issues:

```typescript
console.log('Received form data:', { name, email, subject, message })
console.log('Environment variables:', { 
  hasSendGridKey: !!process.env.SENDGRID_API_KEY 
})
```

## Next Steps

1. Choose an email service provider
2. Set up the integration
3. Test thoroughly
4. Deploy and test in production
5. Monitor email delivery rates

## Support

If you encounter issues:
1. Check the console logs
2. Verify your email service configuration
3. Test the API endpoint directly
4. Check your email service provider's documentation
