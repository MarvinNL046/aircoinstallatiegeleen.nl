import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Airco Offerte Limburg
            </h3>
            <p className="mb-4">
              Uw specialist in airconditioning installatie en onderhoud in heel Limburg.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Snelle Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diensten" className="hover:text-white">
                  Onze Diensten
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-white">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/offerte" className="hover:text-white">
                  Offerte Aanvragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Onze Diensten
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diensten/installatie" className="hover:text-white">
                  Airco Installatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/onderhoud" className="hover:text-white">
                  Onderhoud
                </Link>
              </li>
              <li>
                <Link href="/diensten/reparatie" className="hover:text-white">
                  Reparatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/advies" className="hover:text-white">
                  Advies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Informatie
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+31 (0)6 12345678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@aircooffertelimburg.nl</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Heel Limburg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Airco Offerte Limburg. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}