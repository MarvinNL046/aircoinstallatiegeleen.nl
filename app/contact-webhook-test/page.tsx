import { Metadata } from "next"
import { ContactWebhookTest } from "./contact-webhook-test"

export const metadata: Metadata = {
  title: "Contact Webhook Test",
  description: "Test page for GoHighLevel webhook integration",
  robots: "noindex, nofollow", // Prevent search engines from indexing this test page
}

export default function ContactWebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          GoHighLevel Webhook Test
        </h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-yellow-700">
            <strong>Test Page:</strong> This form only sends to the GoHighLevel webhook, not EmailJS.
          </p>
        </div>
        <ContactWebhookTest />
      </div>
    </div>
  )
}