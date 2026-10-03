import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Navigation, Clock, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { churchInfo } from '../data/churchInfo';

export const Contact = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            {t('contact.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('contact.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white dark:bg-midnight-900 border-gold-500/25 shadow-sacred">
              <h3 className="font-serif font-bold text-xl text-midnight-900 dark:text-white mb-6 pb-2 border-b border-stone-200 dark:border-midnight-800">
                {isTelugu ? 'మందిర సమాచారం' : 'Sanctuary Information'}
              </h3>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-midnight-900 dark:text-white font-serif">{churchInfo.name[lang]}</strong>
                    <span>{churchInfo.address.street[lang]}, {churchInfo.address.village[lang]}, PIN {churchInfo.address.pincode}, {churchInfo.address.district[lang]}, {churchInfo.address.state[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="block text-xs text-stone-400 uppercase font-semibold">Primary Helpline</span>
                    <a href={`tel:${churchInfo.contact.phonePrimary.replace(/[^0-9+]/g, '')}`} className="font-medium hover:text-gold-500">
                      {churchInfo.contact.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="block text-xs text-stone-400 uppercase font-semibold">Email Us</span>
                    <a href={`mailto:${churchInfo.contact.email}`} className="font-medium hover:text-gold-500">
                      {churchInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100 dark:border-midnight-800">
                  <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase font-semibold text-gold-600 dark:text-gold-400">
                      {t('map.serviceTimingTitle')}
                    </strong>
                    <span className="text-xs">{t('map.sundayService')}</span><br />
                    <span className="text-xs">{t('map.fridayPrayer')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 dark:border-midnight-800">
                <Button
                  href={churchInfo.address.directionsLink}
                  variant="gold"
                  size="md"
                  className="w-full"
                  icon={Navigation}
                >
                  {t('map.directionsBtn')}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 bg-white dark:bg-midnight-900 border-gold-500/25 shadow-sacred-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-midnight-900 dark:text-white">
                  {t('contact.sentSuccess')}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      {t('contact.subject')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Visiting Sanctuary / Query"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" icon={Send}>
                  {t('contact.send')}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
