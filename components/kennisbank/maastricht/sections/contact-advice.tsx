import Link from "next/link"

export function ContactAdvice() {
  return (
    <div className="my-8 p-6 bg-blue-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Vraag een vrijblijvende offerte aan</h3>
      <p>
        Wilt u meer weten over de mogelijkheden voor airco installatie in uw woning of bedrijf in Maastricht? 
        Neem contact met ons op voor een vrijblijvend adviesgesprek.
      </p>
      <div className="mt-4">
        <Link 
          href="/offerte" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Offerte Aanvragen
        </Link>
      </div>
    </div>
  )
}
