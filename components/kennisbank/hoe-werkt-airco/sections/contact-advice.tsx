import Link from "next/link"

export function ContactAdvice() {
  return (
    <div className="my-8 p-6 bg-blue-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Advies nodig over airconditioning?</h3>
      <p>
        Heeft u na het lezen van dit artikel nog vragen over hoe een airco werkt of welk systeem 
        het beste bij uw situatie past? Onze experts staan klaar om u persoonlijk advies te geven.
      </p>
      <div className="mt-4">
        <Link 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Neem Contact Op
        </Link>
      </div>
    </div>
  )
}
