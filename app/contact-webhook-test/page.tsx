import { Metadata } from "next"
import { ContactWebhookTest } from "./contact-webhook-test"

export const metadata: Metadata = {
  title: "Webhook Test (Removed)",
  description: "GoHighLevel webhook test has been removed",
  robots: "noindex, nofollow",
}

export default function ContactWebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Webhook Test (Removed)
        </h1>
        <ContactWebhookTest />
      </div>
    </div>
  )
}
