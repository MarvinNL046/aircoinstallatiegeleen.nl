import { Metadata } from 'next';
import { Building2, Award, Users2, ThumbsUp, MapPin, Clock, ShieldCheck, Leaf } from 'lucide-react';
import { Breadcrumb } from "@/components/navigation/breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Over Ons | StayCool Airco Maastricht',
  description: 'Maak kennis met StayCool Airco - uw lokale specialist voor airconditioning installatie, onderhoud en reparatie in Maastricht en omgeving. Ontdek onze expertise en persoonlijke aanpak.',
};

const features = [
  {
    icon: Building2,
    title: 'Lokale Expertise',
    description: 'Meer dan 10 jaar ervaring in airconditioning installatie in Maastricht en omgeving.'
  },
  {
    icon: Award,
    title: 'Gecertificeerd',
    description: 'F-gassen gecertificeerd en erkend voor alle airconditioning werkzaamheden.'
  },
  {
    icon: MapPin,
    title: 'Regionale Kennis',
    description: 'Specialistische kennis van lokale regelgeving en historische panden in Maastricht.'
  },
  {
    icon: ThumbsUp,
    title: '5 Jaar Garantie',
    description: 'Uitgebreide garantie op al onze installaties en werkzaamheden.'
  }
];

const additionalFeatures = [
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Binnen 24 uur reactie op serviceverzoeken in de regio Maastricht.'
  },
  {
    icon: ShieldCheck,
    title: 'Betrouwbaarheid',
    description: 'Transparante prijzen, duidelijke afspraken en stipte nakoming van deadlines.'
  },
  {
    icon: Users2,
    title: 'Persoonlijke Aanpak',
    description: 'Advies op maat voor uw specifieke situatie en wensen.'
  },
  {
    icon: Leaf,
    title: 'Duurzaamheid',
    description: 'Focus op energiezuinige systemen en milieuvriendelijke koudemiddelen.'
  }
];

const testimonials = [
  {
    name: "Familie Janssen",
    location: "Wyck, Maastricht",
    quote: "StayCool heeft onze monumentale woning voorzien van een perfect geïntegreerd aircosysteem. De monteurs kenden de uitdagingen van historische panden en kwamen met creatieve oplossingen."
  },
  {
    name: "Restaurant Maasvallei",
    location: "Centrum, Maastricht",
    quote: "Onze gasten genieten nu van een perfect klimaat, ongeacht het seizoen. De installatie werd buiten openingstijden uitgevoerd, zonder enige verstoring van onze bedrijfsvoering."
  },
  {
    name: "Kantoorpand Céramique",
    location: "Céramique, Maastricht",
    quote: "De multi-split oplossing die StayCool installeerde, bespaart ons maandelijks aanzienlijk op energiekosten. Professioneel advies en vakkundige installatie."
  }
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Over Ons", href: "/over-ons" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Over StayCool Airco Maastricht</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6 text-muted-foreground">
            Uw lokale specialist voor airconditioning in het unieke klimaat en de karakteristieke gebouwen van Maastricht.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-4">
                StayCool Airco is uw betrouwbare partner voor alle airconditioning oplossingen in Maastricht en omgeving. 
                Als lokale specialist begrijpen we de unieke uitdagingen van het Maastrichtse klimaat en de karakteristieke 
                architectuur van de stad.
              </p>
              <p className="mb-4">
                Onze expertise strekt zich uit van moderne appartementen in Céramique tot monumentale panden in het historische 
                centrum. We bieden maatwerkoplossingen die perfect aansluiten bij de specifieke eisen van uw woning of bedrijfspand.
              </p>
              <p>
                Met ons team van ervaren en gecertificeerde monteurs, allen bekend met de lokale regelgeving en bouwstijlen, 
                garanderen wij een professionele installatie met minimale impact op uw pand en maximaal comfort.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Waarom kiezen voor een lokale specialist?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kennis van lokale regelgeving en vergunningen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Ervaring met typische Maastrichtse gebouwen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Snelle service bij storingen of onderhoud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Persoonlijk advies afgestemd op lokale omstandigheden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Betrokkenheid bij de lokale gemeenschap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Onze Diensten in Maastricht</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Airco Installatie</h3>
            <p className="mb-4">
              Professionele installatie van airconditioning systemen, perfect afgestemd op uw woning of bedrijf in Maastricht. 
              Van moderne split-units tot geavanceerde multi-split systemen.
            </p>
            <Link href="/diensten" className="text-blue-600 hover:underline font-medium">
              Meer over installatie →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Onderhoud & Service</h3>
            <p className="mb-4">
              Regelmatig onderhoud en snelle service voor alle merken airconditioners in Maastricht. 
              Voorkom storingen en verleng de levensduur van uw systeem.
            </p>
            <Link href="/kennisbank/onderhoud-tips" className="text-blue-600 hover:underline font-medium">
              Meer over onderhoud →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Advies & Offerte</h3>
            <p className="mb-4">
              Persoonlijk advies over de beste airconditioning oplossing voor uw situatie in Maastricht. 
              Vrijblijvende offerte met transparante prijzen.
            </p>
            <Link href="/offerte" className="text-blue-600 hover:underline font-medium">
              Vraag een offerte aan →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
        <p className="text-lg mb-4">
          Wij streven ernaar om hoogwaardige klimaatoplossingen toegankelijk te maken voor iedereen in Maastricht en omgeving. 
          Door onze lokale expertise te combineren met persoonlijke service, zorgen we ervoor dat elk project succesvol wordt afgerond.
        </p>
        <p className="text-lg">
          Onze focus ligt op duurzame, energiezuinige systemen die niet alleen comfort bieden, maar ook bijdragen aan een lagere 
          energierekening en een kleinere ecologische voetafdruk. Als lokaal bedrijf voelen we ons verantwoordelijk voor het 
          welzijn van onze gemeenschap en het behoud van het unieke karakter van Maastricht.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meer Redenen om voor StayCool te Kiezen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Wat Onze Klanten Zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-blue-600 text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Klaar om te Beginnen?</h2>
              <p className="mb-6">
                Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek of offerte. 
                Onze Maastrichtse experts staan voor u klaar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Opnemen
                </Link>
                <Link 
                  href="/offerte" 
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden h-64">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/9m-jkGgfLog" 
                  title="StayCool Airco Maastricht Bedrijfsvideo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
