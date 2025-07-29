import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BedanktPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-6 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bedankt voor uw bericht!
          </h1>
          
          <p className="text-gray-600 mb-6">
            We hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
          </p>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Voor dringende zaken kunt u ons direct bereiken op:
            </p>
            
            <a 
              href="tel:0462021430" 
              className="block text-blue-600 font-semibold text-lg hover:underline"
            >
              046 202 1430
            </a>
          </div>
          
          <div className="mt-8">
            <Link href="/">
              <Button className="w-full">
                Terug naar homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}