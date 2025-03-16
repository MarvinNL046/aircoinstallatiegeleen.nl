import Link from "next/link"

export function ContactAdvice() {
  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <p className="font-semibold">Advies nodig?</p>
      <p>
        Onze experts helpen u graag bij het kiezen van het juiste airconditioningsysteem voor uw situatie.{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          Neem contact op
        </Link>{" "}
        voor persoonlijk advies.
      </p>
    </div>
  )
}