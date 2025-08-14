export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailResponse {
  success: boolean
  message: string
  error?: string
}

export class EmailService {
  private static readonly RECIPIENT_EMAIL = "segnigirma11@gmail.com"

  /**
   * Send email using a custom API endpoint
   * This requires setting up a backend API endpoint
   */

  /**
   * Send email using a custom API endpoint (alternative approach)
   * This requires setting up a backend API endpoint
   */
  static async sendEmailWithAPI(formData: ContactFormData): Promise<EmailResponse> {
    try {
      console.log('📤 Attempting to send email via API...')
      console.log('📝 Form Data:', formData)
      console.log('📧 Recipient Email:', this.RECIPIENT_EMAIL)

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: this.RECIPIENT_EMAIL
        }),
      })

      console.log('📡 API Response Status:', response.status)
      console.log('📡 API Response OK:', response.ok)

      const result = await response.json()
      console.log('📡 API Response Data:', result)

      if (response.ok && result.success) {
        console.log('✅ Email sent successfully via API!')
        return {
          success: true,
          message: "Email sent successfully! I'll get back to you soon."
        }
      } else {
        console.error('❌ API returned error:', result.message)
        throw new Error(result.message || 'Failed to send email')
      }

    } catch (error) {
      console.error("❌ API email sending failed:", error)
      return {
        success: false,
        message: "Failed to send email. Please try again or contact me directly.",
        error: error instanceof Error ? error.message : "Unknown error"
      }
    }
  }

  /**
   * Fallback method - open default email client
   * This is a backup option if other methods fail
   */
  static openEmailClient(formData: ContactFormData): void {
    console.log('📧 Opening email client as fallback...')
    console.log('📝 Preparing email with data:', formData)
    
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    const mailtoLink = `mailto:${this.RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
    console.log('🔗 Mailto Link:', mailtoLink)
    
    window.open(mailtoLink, '_blank')
    console.log('✅ Email client opened successfully!')
  }

  /**
   * Main method to send email - tries multiple approaches
   */
  static async sendEmail(formData: ContactFormData): Promise<EmailResponse> {
    console.log('🚀 Starting email sending process...')
    console.log('📧 Target Email:', this.RECIPIENT_EMAIL)
    console.log('📝 Form Data:', formData)
    
    // Try API endpoint first
    console.log('🔄 Attempting API method...')
    let result = await this.sendEmailWithAPI(formData)
    
    if (result.success) {
      console.log('🎉 Email sent successfully via API!')
      return result
    }

    // If API fails, open email client as fallback
    console.log('⚠️ API method failed, trying email client fallback...')
    this.openEmailClient(formData)
    
    console.log('📧 Fallback method completed - email client opened')
    return {
      success: true,
      message: "Opened your email client. Please send the message manually."
    }
  }
}
