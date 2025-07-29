import ExtendedContactForm from '@/components/forms/ExtendedContactForm';

export default function OfferteTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Test Uitgebreid Offerte Formulier
            </h1>
            <p className="text-lg text-gray-600">
              Dit formulier bevat alle velden voor GoHighLevel integratie
            </p>
          </div>
          
          <ExtendedContactForm
            title="Vraag uw vrijblijvende offerte aan"
            subtitle="Vul onderstaand formulier in en ontvang binnen 24 uur een offerte op maat."
            redirectUrl="/bedankt"
            formType="extended_offerte_test"
            defaultProvince="Limburg"
          />
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">Formulier Features:</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>✅ Voornaam & Achternaam (gesplitst)</li>
              <li>✅ Volledig adres met postcode</li>
              <li>✅ Provincie selectie</li>
              <li>✅ Type ruimte voor airco</li>
              <li>✅ Gewenst vermogen (kW)</li>
              <li>✅ Beste beltijd</li>
              <li>✅ Contact Source automatisch ingevuld</li>
              <li>✅ Datum lead automatisch toegevoegd</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}