"use client"

export function ContactWebhookTest() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
        <p className="text-yellow-800">
          <strong>Notice:</strong> The GoHighLevel webhook test has been removed.
          Contact form submissions now use EmailJS + LeadFlow CRM.
        </p>
      </div>
      <p className="text-gray-600">
        Please use the main <a href="/contact" className="text-blue-600 underline">contact page</a> to test form submissions.
      </p>
    </div>
  )
}
