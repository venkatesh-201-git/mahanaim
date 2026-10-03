import React, { useState } from 'react';
import { Quote, Sparkles, HeartHandshake, CheckCircle2, Send, Plus, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { testimonies as initialTestimonies } from '../data/testimonies';

export const Testimonies = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [testimonyForm, setTestimonyForm] = useState({
    name: '',
    location: '',
    category: 'Healing',
    quote: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setTestimonyForm({ name: '', location: '', category: 'Healing', quote: '' });
    }, 2500);
  };

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            {t('testimonies.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('testimonies.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 mb-8 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('testimonies.subtitle')}
          </p>

          <Button
            onClick={() => setModalOpen(true)}
            variant="gold"
            size="md"
            icon={HeartHandshake}
          >
            {t('testimonies.shareTestimony')}
          </Button>
        </div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {initialTestimonies.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-sacred-lg hover:border-gold-500/40 transition-all duration-300 group bg-white dark:bg-midnight-900"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5" />
              </div>

              <p className={`text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed italic mb-8 ${
                isTelugu ? 'font-telugu-serif not-italic' : ''
              }`}>
                "{isTelugu ? item.quote.te : item.quote.en}"
              </p>

              <div className="pt-4 border-t border-stone-100 dark:border-midnight-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-midnight-900 dark:text-white">
                    {isTelugu ? item.author.te : item.author.en}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {isTelugu ? item.location.te : item.location.en}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30">
                  {isTelugu ? item.category.te : item.category.en}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Share Testimony Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-500/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif font-bold text-xl text-midnight-900 dark:text-white">
                {t('testimonies.shareTestimony')}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <p className="font-bold text-lg text-midnight-900 dark:text-white">
                  {isTelugu ? 'మీ సాక్ష్యానికి ధన్యవాదాలు! దేవునికి మహిమ కలుగును గాక.' : 'Thank you for your testimony! Praise the Lord.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    {t('prayerRequest.nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    value={testimonyForm.name}
                    onChange={(e) => setTestimonyForm({ ...testimonyForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    {isTelugu ? 'ప్రాంతం / ఊరు' : 'City / Village'}
                  </label>
                  <input
                    type="text"
                    required
                    value={testimonyForm.location}
                    onChange={(e) => setTestimonyForm({ ...testimonyForm, location: e.target.value })}
                    placeholder="e.g. Kandlagunta, Palnadu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    {isTelugu ? 'మీ సాక్ష్యము' : 'Your Testimony'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={testimonyForm.quote}
                    onChange={(e) => setTestimonyForm({ ...testimonyForm, quote: e.target.value })}
                    placeholder={isTelugu ? 'దేవుడు మీ జీవితంలో చేసిన మేలును వివరించండి...' : 'Share what Jesus has done in your life...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <Button type="submit" variant="gold" size="md" className="w-full" icon={Send}>
                  {isTelugu ? 'సాక్ష్యం సమర్పించండి' : 'Submit Testimony'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
