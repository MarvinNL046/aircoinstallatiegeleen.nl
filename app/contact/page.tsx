import { Metadata } from 'next';
import { Breadcrumb } from "@/components/navigation/breadcrumb";
import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Airco Offerte Limburg',
  description: 'Neem contact op met Airco Offerte Limburg voor een vrijblijvende offerte of advies over airconditioning installatie en onderhoud.',
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefoon',
    content: '0462021430',
    href: 'tel:0462021430',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'info@staycoolairco.nl',
    href: 'mailto:info@staycoolairco.nl',
  },
  {
    icon: MapPin,
    title: 'Locatie',
    content: 'Heel Limburg',
    href: '#',
  },
];

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Stuur ons een bericht</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contactgegevens</h2>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied</h2>
              <p className="text-gray-600">
                Wij zijn actief in heel Limburg en omstreken. Van Maastricht tot Venlo, 
                en van Roermond tot Weert - wij komen graag bij u langs voor een vrijblijvend adviesgesprek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}