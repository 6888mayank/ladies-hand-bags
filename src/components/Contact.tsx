import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Manufacturing Inquiry',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
      }));
    }
  }, [initialSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean front-end submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const ref = `BBI-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(ref);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Manufacturing Inquiry',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-luxury-cream text-luxury-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
              Corporate &amp; Atelier Relations
            </span>
            <div className="w-6 h-[1px] bg-luxury-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-luxury-dark">
            Let&apos;s Create Something Beautiful.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-luxury-taupe font-light leading-relaxed">
            For product inquiries, business collaborations, manufacturing-related discussions or any other information, connect with Byte Bridges India.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Cards & Atelier Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-luxury-warmwhite p-8 border border-luxury-sand/80 shadow-sm space-y-7">
              <h3 className="font-serif text-2xl text-luxury-dark font-normal">
                Direct Atelier Contact
              </h3>
              <p className="text-xs sm:text-sm text-luxury-taupe font-light leading-relaxed">
                Whether you represent a fashion retail brand, department boutique, or private label, our production management team will provide comprehensive manufacturing specifications.
              </p>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-luxury-cream border border-luxury-sand text-luxury-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-taupe font-medium block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-medium text-luxury-dark hover:text-luxury-gold transition-colors block mt-0.5 underline-offset-2 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-luxury-cream border border-luxury-sand text-luxury-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-taupe font-medium block">
                    Phone &amp; WhatsApp Support
                  </span>
                  <a
                    href={`tel:+91${COMPANY_INFO.phoneRaw}`}
                    className="text-sm font-medium text-luxury-dark hover:text-luxury-gold transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/91${COMPANY_INFO.phoneRaw}?text=Hello%20Byte%20Bridges%20India,%20I%20am%20interested%20in%20handbag%20manufacturing.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-luxury-gold hover:text-luxury-espresso font-medium mt-1 transition-colors"
                  >
                    <span>Direct WhatsApp Chat</span>
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-luxury-cream border border-luxury-sand text-luxury-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-taupe font-medium block">
                    Registered Office &amp; Facility
                  </span>
                  <p className="text-sm font-medium text-luxury-dark mt-0.5">
                    {COMPANY_INFO.addressLine1}
                  </p>
                  <p className="text-xs text-luxury-taupe mt-0.5 leading-relaxed font-light">
                    {COMPANY_INFO.addressLine2}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-luxury-cream border border-luxury-sand text-luxury-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-taupe font-medium block">
                    Working Hours
                  </span>
                  <p className="text-xs text-luxury-dark/90 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Business Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-luxury-warmwhite p-8 sm:p-10 border border-luxury-sand/80 shadow-md">
              {submitted ? (
                /* Success Confirmation State */
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/15 border border-luxury-gold flex items-center justify-center mx-auto text-luxury-gold">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-luxury-dark">
                    Inquiry Received with Distinction.
                  </h3>
                  <p className="text-sm text-luxury-charcoal max-w-md mx-auto font-light leading-relaxed">
                    Thank you for reaching out to <strong className="font-medium text-luxury-dark">Byte Bridges India</strong>. Our handbag design &amp; manufacturing team will review your project brief and respond within 24 business hours.
                  </p>
                  <div className="p-3 bg-luxury-cream border border-luxury-sand max-w-xs mx-auto text-xs font-mono text-luxury-taupe">
                    Reference ID: <span className="font-semibold text-luxury-dark">{referenceNumber}</span>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-luxury-brown text-luxury-brown hover:bg-luxury-brown hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl text-luxury-dark font-normal">
                      Initiate Business Dialogue
                    </h3>
                    <p className="text-xs text-luxury-taupe mt-1">
                      Complete this form for manufacturing partnerships, product showcases, or design inquiries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark placeholder:text-luxury-taupe/50 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. eleanor@luxurybrand.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark placeholder:text-luxury-taupe/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark placeholder:text-luxury-taupe/50 transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                        Inquiry Nature
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark transition-colors"
                      >
                        <option value="Manufacturing Inquiry">Handbag Manufacturing &amp; Production</option>
                        <option value="Private Label Collection">Private Label &amp; OEM Development</option>
                        <option value="Sample Inspection">Sample Request &amp; Design Review</option>
                        <option value="Brand Collaboration">Brand Partnership &amp; Showcasing</option>
                        <option value="General Inquiry">General Information</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="e.g. Handbag manufacturing order specifications for Autumn collection"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark placeholder:text-luxury-taupe/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium text-luxury-charcoal mb-2">
                      Detailed Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your handbag concept, preferred silhouettes, leather preferences, and estimated production schedule..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-cream border border-luxury-sand focus:border-luxury-gold focus:outline-none text-xs sm:text-sm text-luxury-dark placeholder:text-luxury-taupe/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-luxury-espresso hover:bg-luxury-brown text-luxury-cream text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Business Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[10px] text-luxury-taupe tracking-wider">
                      We respect confidentiality. All design and proprietary details remain strictly protected.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
