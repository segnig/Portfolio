# 📧 Gmail Alternative Setup Guide

If you prefer to use Gmail instead of SendGrid, here's how to set it up:

## 🔐 **Step 1: Enable 2-Factor Authentication**

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **"Security"**
3. Enable **"2-Step Verification"** if not already enabled

## 🔑 **Step 2: Generate App Password**

1. In Security settings, find **"App passwords"**
2. Click **"App passwords"**
3. Select **"Mail"** and **"Other (Custom name)"**
4. Name it: `Portfolio Contact Form`
5. Click **"Generate"**
6. **Copy the 16-character password** (no spaces)

## 📦 **Step 3: Install Nodemailer**

```bash
npm install nodemailer
```

## 🌍 **Step 4: Create Environment File**

Create `.env.local` in your project root:

```bash
# Gmail Configuration
GMAIL_USER=segnigirma11@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

## 🔄 **Step 5: Update API Route**

Replace the SendGrid code in `app/api/send-email/route.ts` with:

```typescript
// Import nodemailer
const nodemailer = require('nodemailer')

// Create transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

// Send email
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: recipientEmail,
  subject: `Portfolio Contact: ${subject}`,
  text: `
    New contact form submission from your portfolio:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${message}
    
    ---
    This email was sent from your portfolio contact form.
  `,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Portfolio Contact Form Submission</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #555;">Message:</h3>
        <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
      </div>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
      <p style="color: #888; font-size: 12px;">This email was sent from your portfolio contact form.</p>
    </div>
  `,
  replyTo: email
}

await transporter.sendMail(mailOptions)
```

## ✅ **Advantages of Gmail:**

- ✅ **Free** - No monthly limits
- ✅ **Familiar** - You already use Gmail
- ✅ **Reliable** - Google's infrastructure
- ✅ **Simple** - No third-party service needed

## ⚠️ **Limitations:**

- ⚠️ **Daily limit**: ~500 emails/day
- ⚠️ **App password required** - More complex setup
- ⚠️ **Less professional** - From your personal Gmail

## 🎯 **Choose Gmail if:**

- You want a free solution
- You're comfortable with technical setup
- You don't expect high email volume
- You prefer Google services

## 🎯 **Choose SendGrid if:**

- You want professional email delivery
- You need better deliverability
- You want detailed analytics
- You plan to scale in the future

---

**Both solutions will work perfectly for your portfolio! Choose what feels right for you.**
