"use client"

import Link from "next/link"
import { TableOfContents } from "./table-of-contents"
import { EfficiencyTable } from "./efficiency-table"
import { ImportanceGrid } from "./importance-grid"
import { Recommendation } from "./recommendation"

export function ArticleContent() {
  return (
    <div className="prose max-w-none">
      <TableOfContents />
      
      <h2 id="intro" className="text-2xl font-bold mb-4">Introductie</h2>
      <p className="mb-6">
        Een <Link href="/diensten/installatie" className="text-blue-600 hover:underline">airconditioner kiezen</Link> op 
        basis van energiezuinigheid? Dan zijn de SCOP en SEER waarden essentiële indicatoren. 
        In dit artikel leggen we uit wat deze waarden betekenen en waarom ze belangrijk zijn voor uw keuze.
      </p>

      <h2 id="seer" className="text-2xl font-bold mb-4">Wat is SEER?</h2>
      <p className="mb-4">
        SEER (Seasonal Energy Efficiency Ratio) geeft aan hoe efficiënt een airconditioner koelt. 
        Hoe hoger de SEER waarde, hoe energiezuiniger het systeem. Bekijk ook onze{" "}
        <Link href="/merken" className="text-blue-600 hover:underline">
          verschillende merken
        </Link>{" "}
        voor specifieke SEER waarden per model.
      </p>
      
      <EfficiencyTable type="seer" />

      <h2 id="scop" className="text-2xl font-bold mb-4">Wat is SCOP?</h2>
      <p className="mb-4">
        SCOP (Seasonal Coefficient of Performance) meet de verwarmingsefficiëntie. 
        Ook hier geldt: hoe hoger, hoe beter. Lees meer over{" "}
        <Link href="/kennisbank/klimaatbeheersing" className="text-blue-600 hover:underline">
          klimaatbeheersing
        </Link>{" "}
        in onze kennisbank.
      </p>
      
      <EfficiencyTable type="scop" />

      <h2 id="importance" className="text-2xl font-bold mb-4">
        Waarom zijn deze waarden belangrijk?
      </h2>
      
      <ImportanceGrid />
      <Recommendation />

      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="font-semibold">💡 Tip:</p>
        <p>
          Vraag bij aanschaf altijd naar de specifieke SCOP en SEER waarden van het systeem. 
          Deze informatie is verplicht beschikbaar en helpt u een weloverwogen keuze te maken. 
          Neem{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact met ons op
          </Link>{" "}
          voor persoonlijk advies of{" "}
          <Link href="/offerte" className="text-blue-600 hover:underline">
            vraag direct een offerte aan
          </Link>.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Gerelateerde artikelen:</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/kennisbank/energiebesparing" className="text-blue-600 hover:underline">
              • Energiebesparende Tips voor uw Airconditioning
            </Link>
          </li>
          <li>
            <Link href="/kennisbank/onderhoud-tips" className="text-blue-600 hover:underline">
              • Onderhoudstips voor Optimale Prestaties
            </Link>
          </li>
          <li>
            <Link href="/blog/voordelen-van-airconditioning" className="text-blue-600 hover:underline">
              • De 7 Belangrijkste Voordelen van een Airconditioning
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}