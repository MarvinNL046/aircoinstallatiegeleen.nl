"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { sendEmail, trackFormSubmission, trackPixelFormSubmission } from '@/lib/email-dual';
import { toast } from 'sonner';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showCityField?: boolean;
  redirectUrl?: string;
  formType?: string;
}

export default function ContactForm({ 
  title,
  subtitle,
  showCityField = false,
  redirectUrl = "/bedankt",
  formType = "contact_form"
}: ContactFormProps = {}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (status === 'sending') return;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vul alle verplichte velden in.');
      return;
    }
    
    setStatus('sending');

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: showCityField ? formData.city : undefined,
        message: formData.message
      });
      
      setStatus('success');
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      
      // Track success
      trackFormSubmission(formType, true);
      trackPixelFormSubmission(formType, true);
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
      
      // Redirect after delay
      setTimeout(() => {
        router.push(redirectUrl);
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track failure
      trackFormSubmission(formType, false);
      trackPixelFormSubmission(formType, false);
    }
  };

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Uw naam"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Uw telefoonnummer"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        {showCityField && (
          <div>
            <Input
              name="city"
              placeholder="Uw woonplaats"
              value={formData.city}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        )}
        <div>
          <Textarea
            name="message"
            placeholder="Uw bericht"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-[150px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? (
          'Verzenden...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Verstuur Bericht
          </>
        )}
      </Button>

    </form>
    </div>
  );
}