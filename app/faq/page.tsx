import { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"

export const metadata: Metadata = {
  title: "Veelgestelde Vragen | Airco Offerte Limburg",
  description: "Vind antwoorden op veelgestelde vragen over airconditioning, installatie, onderhoud en meer.",
}

const faqs = [
  {
    question: "Wat kost een airco installatie?",
    answer: "De kosten van een airco installatie variëren afhankelijk van verschillende factoren zoals het type systeem, het aantal units en de complexiteit van de installatie. Gemiddeld ligt de prijs tussen €1.000 en €2.500 voor een single-split systeem. Neem contact met ons op voor een exacte prijsopgave."
  },
  {
    question: "Heb ik een vergunning nodig voor een airco?",
    answer: "In de meeste gevallen is geen vergunning nodig voor het plaatsen van een airco. Wel zijn er gemeentelijke regels over de plaatsing van de buitenunit. Wij adviseren u graag over de specifieke regelgeving in uw gemeente."
  },
  {
    question: "Hoe vaak moet een airco onderhouden worden?",
    answer: "Voor optimale prestaties en een lange levensduur adviseren wij jaarlijks onderhoud. Bij intensief gebruik kan vaker onderhoud nodig zijn. Tijdens een onderhoudsbeurt worden filters gereinigd, wordt het systeem gecontroleerd en wordt de werking geoptimaliseerd."
  },
  {
    question: "Wat is het energieverbruik van een airco?",
    answer: "Het energieverbruik hangt af van factoren zoals de grootte van de ruimte, de gewenste temperatuur en het type airco. Moderne systemen zijn zeer energiezuinig met energielabels tot A+++. Gemiddeld verbruikt een airco tussen de 0,5 en 2 kWh per uur."
  },
  {
    question: "Hoe lang gaat een airco mee?",
    answer: "Bij goed onderhoud gaat een kwalitatieve airco 10 tot 15 jaar mee. Factoren die de levensduur beïnvloeden zijn de gebruiksintensiteit, onderhoud en de kwaliteit van de installatie."
  }
]

export default function FAQPage() {
  const breadcrumbItems = [
    { label: "FAQ", href: "/faq" }
  ];

  return (
    <>
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="mb-8 text-4xl font-bold">Veelgestelde Vragen</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Vind snel antwoord op de meest gestelde vragen over airconditioning
        </p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <CTAWithForm 
        title="Heeft u nog andere vragen?" 
        description="Neem contact met ons op voor persoonlijk advies"
      />
    </>
  )
}