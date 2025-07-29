import ContactForm from '@/components/forms/ContactForm';

export default function ContactTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8">
            Test Webhook Integration
          </h1>
          
          <ContactForm
            title="Test GoHighLevel Webhook"
            subtitle="Test formulier voor GHL webhook integratie"
            showCityField={true}
            redirectUrl="/bedankt"
            formType="test_form"
          />
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Test Informatie:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Webhook URL is geconfigureerd</li>
              <li>• EmailJS backup is actief</li>
              <li>• Sonner toast notificaties zijn ingeschakeld</li>
              <li>• Redirect naar /bedankt na succes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}