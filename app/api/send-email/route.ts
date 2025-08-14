import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, recipientEmail } = body as ContactFormData & { recipientEmail: string }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Gmail with Nodemailer
    try {
      // Check if Gmail is configured
      console.log('Checking Gmail configuration...')
      console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Not set')
      console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set')
      
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.log('Gmail not configured, falling back to console logging')
        
        // Fallback: Log email content
        const emailContent = {
          to: recipientEmail,
          from: email,
          subject: `Portfolio Contact: ${subject}`,
          message: `
            New contact form submission from your portfolio:
            
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            
            Message:
            ${message}
            
            ---
            This email was sent from your portfolio contact form.
          `
        }
        
        console.log('EMAIL LOGGED (Gmail not configured):')
        console.log('Recipient:', emailContent.to)
        console.log('From:', emailContent.from)
        console.log('Subject:', emailContent.subject)
        console.log('Message Length:', emailContent.message.length, 'characters')
        console.log('Timestamp:', new Date().toISOString())
        
        return NextResponse.json({
          success: true,
          message: 'Email logged successfully (Gmail not configured)'
        })
      }

      // Import nodemailer dynamically to avoid SSR issues
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
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
        replyTo: email // So you can reply directly to the sender
      }

      console.log('Attempting to send email via Gmail...')
      console.log('To:', recipientEmail)
      console.log('From:', mailOptions.from)
      console.log('Subject:', mailOptions.subject)

      const info = await transporter.sendMail(mailOptions)
      
      console.log('EMAIL SENT SUCCESSFULLY via Gmail!')
      console.log('Message ID:', info.messageId)
      console.log('Response:', info.response)
      console.log('Timestamp:', new Date().toISOString())

      return NextResponse.json({
        success: true,
        message: 'Email sent successfully'
      })

    } catch (gmailError) {
      console.error('Gmail error:', gmailError)
      
      // Fallback: Log email content
      const emailContent = {
        to: recipientEmail,
        from: email,
        subject: `Portfolio Contact: ${subject}`,
        message: `
          New contact form submission from your portfolio:
          
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
          
          ---
          This email was sent from your portfolio contact form.
        `
      }
      
      console.log('EMAIL LOGGED (Gmail failed):')
      console.log('Recipient:', emailContent.to)
      console.log('From:', emailContent.from)
      console.log('Subject:', emailContent.subject)
      console.log('Message Length:', emailContent.message.length, 'characters')
      console.log('Timestamp:', new Date().toISOString())
      
      return NextResponse.json({
        success: true,
        message: 'Email logged successfully (Gmail failed)'
      })
    }

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
