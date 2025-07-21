"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { sendToWebhookOnly } from "@/lib/email-dual"

export function ContactWebhookTest() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "Test User",
    email: "test@example.com",
    phone: "0612345678",
    city: "Maastricht",
    message: "This is a test message for the GoHighLevel webhook",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setWebhookStatus('idle')

    try {
      const success = await sendToWebhookOnly(formData)
      
      if (success) {
        setWebhookStatus('success')
        toast.success("Webhook sent successfully!")
      } else {
        setWebhookStatus('error')
        toast.error("Webhook failed - check console for details")
      }
    } catch (error) {
      setWebhookStatus('error')
      toast.error("Error sending to webhook")
      console.error("Webhook error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input
            type="tel"
            placeholder="Your phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <Input
            placeholder="Your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <Textarea
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending to webhook...
            </>
          ) : (
            "Send Test to GoHighLevel"
          )}
        </Button>
      </form>

      {webhookStatus !== 'idle' && (
        <div className={`p-4 rounded-lg ${
          webhookStatus === 'success' ? 'bg-green-100' : 'bg-red-100'
        }`}>
          <div className="flex items-center space-x-2">
            {webhookStatus === 'success' ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">Webhook sent successfully!</span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800">Webhook failed - check browser console for details</span>
              </>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Webhook Data Preview:</h3>
        <pre className="text-sm overflow-auto">
{JSON.stringify({
  data: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    city: formData.city,
    message: formData.message
  }
}, null, 2)}
        </pre>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Debug Tips:</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Open browser Developer Tools (F12) to see console logs</li>
          <li>Check Network tab to see the webhook request</li>
          <li>Enable DEBUG_MODE in /lib/email-dual.ts for detailed logs</li>
          <li>Common errors: "No scenario listening" means webhook not active in GHL</li>
        </ul>
      </div>
    </div>
  )
}