"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Loader2 } from 'lucide-react';
import { sendExtendedEmail, trackFormSubmission, trackPixelFormSubmission, ExtendedEmailData } from '@/lib/email-dual';
import { toast } from 'sonner';

interface ExtendedContactFormProps {
  title?: string;
  subtitle?: string;
  redirectUrl?: string;
  formType?: string;
  defaultProvince?: string;
}

export default function ExtendedContactForm({ 
  title = "Vraag een offerte aan",
  subtitle = "Vul het formulier in voor een vrijblijvende offerte op maat.",
  redirectUrl = "/bedankt",
  formType = "extended_contact_form",
  defaultProvince = "Limburg"
}: ExtendedContactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    message: '',
    roomType: '',
    aircoCapacity: '',
    bestCallTime: '',
    province: defaultProvince
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.city || !formData.postalCode) {
      toast.error('Vul alle verplichte velden in.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const emailData: ExtendedEmailData = {
        ...formData,
        contactSource: 'aircoinstallatiegeleen.nl',
        message: formData.message || `Offerte aanvraag van ${formData.firstName} ${formData.lastName} - ${new Date().toLocaleString('nl-NL')}`
      };

      await sendExtendedEmail(emailData);
      
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      
      // Track success
      trackFormSubmission(formType, true);
      trackPixelFormSubmission(formType, true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        postalCode: '',
        streetAddress: '',
        message: '',
        roomType: '',
        aircoCapacity: '',
        bestCallTime: '',
        province: defaultProvince
      });
      
      // Redirect after delay
      setTimeout(() => {
        router.push(redirectUrl);
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track failure
      trackFormSubmission(formType, false);
      trackPixelFormSubmission(formType, false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Naam velden */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Voornaam *
            </label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Jan"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Achternaam *
            </label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Jansen"
            />
          </div>
        </div>

        {/* Contact gegevens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mailadres *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jan.jansen@voorbeeld.nl"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefoonnummer *
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="06 12345678"
            />
          </div>
        </div>

        {/* Adres gegevens */}
        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Straat en huisnummer
          </label>
          <Input
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Voorbeeldstraat 123"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode *
            </label>
            <Input
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="6161 AA"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Plaats *
            </label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Geleen"
            />
          </div>
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
              Provincie
            </label>
            <Select 
              value={formData.province} 
              onValueChange={(value) => handleSelectChange('province', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecteer provincie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Limburg">Limburg</SelectItem>
                <SelectItem value="Noord-Brabant">Noord-Brabant</SelectItem>
                <SelectItem value="Gelderland">Gelderland</SelectItem>
                <SelectItem value="Zuid-Holland">Zuid-Holland</SelectItem>
                <SelectItem value="Noord-Holland">Noord-Holland</SelectItem>
                <SelectItem value="Utrecht">Utrecht</SelectItem>
                <SelectItem value="Overijssel">Overijssel</SelectItem>
                <SelectItem value="Flevoland">Flevoland</SelectItem>
                <SelectItem value="Friesland">Friesland</SelectItem>
                <SelectItem value="Groningen">Groningen</SelectItem>
                <SelectItem value="Drenthe">Drenthe</SelectItem>
                <SelectItem value="Zeeland">Zeeland</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Airco specifieke vragen */}
        <div className="space-y-4">
          <div>
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
              Voor welk type ruimte wilt u een airco?
            </label>
            <Select 
              value={formData.roomType} 
              onValueChange={(value) => handleSelectChange('roomType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecteer type ruimte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Woonkamer">Woonkamer</SelectItem>
                <SelectItem value="Slaapkamer">Slaapkamer</SelectItem>
                <SelectItem value="Kantoor">Kantoor</SelectItem>
                <SelectItem value="Winkel">Winkel</SelectItem>
                <SelectItem value="Restaurant/Café">Restaurant/Café</SelectItem>
                <SelectItem value="Praktijkruimte">Praktijkruimte</SelectItem>
                <SelectItem value="Meerdere ruimtes">Meerdere ruimtes</SelectItem>
                <SelectItem value="Anders">Anders</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="aircoCapacity" className="block text-sm font-medium text-gray-700 mb-1">
              Weet u welk vermogen (kW) uw airco nodig heeft?
            </label>
            <Select 
              value={formData.aircoCapacity} 
              onValueChange={(value) => handleSelectChange('aircoCapacity', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecteer vermogen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weet ik niet">Weet ik niet</SelectItem>
                <SelectItem value="2.5 kW">2.5 kW (15-20 m²)</SelectItem>
                <SelectItem value="3.5 kW">3.5 kW (20-30 m²)</SelectItem>
                <SelectItem value="5.0 kW">5.0 kW (30-45 m²)</SelectItem>
                <SelectItem value="7.0 kW">7.0 kW (45-60 m²)</SelectItem>
                <SelectItem value="Groter dan 7.0 kW">Groter dan 7.0 kW</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="bestCallTime" className="block text-sm font-medium text-gray-700 mb-1">
              Wanneer kunnen wij u het beste telefonisch bereiken?
            </label>
            <Select 
              value={formData.bestCallTime} 
              onValueChange={(value) => handleSelectChange('bestCallTime', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecteer tijd" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ochtend (9:00-12:00)">Ochtend (9:00-12:00)</SelectItem>
                <SelectItem value="Middag (12:00-17:00)">Middag (12:00-17:00)</SelectItem>
                <SelectItem value="Avond (17:00-20:00)">Avond (17:00-20:00)</SelectItem>
                <SelectItem value="Hele dag bereikbaar">Hele dag bereikbaar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Aanvullende informatie
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Heeft u specifieke wensen of vragen? Laat het ons weten..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verzenden...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Offerte Aanvragen
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Door dit formulier te verzenden gaat u akkoord met onze privacy voorwaarden. 
          We gebruiken uw gegevens alleen om contact met u op te nemen.
        </p>
      </form>
    </div>
  );
}