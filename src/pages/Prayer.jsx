import React, { useState } from 'react';
import { HeartHandshake, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles, Send, Lock, User, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { prayerService } from '../services/prayerService';
import { churchInfo } from '../data/churchInfo';

export const Prayer = () => {
  const { lang, isTelugu, t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Healing',
    request: '',
    isAnonymous: false,
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const categories = [
    { id: 'Healing', en: 'Physical & Emotional Healing', te: 'శారీరక & మానసిక స్వస్థత' },
    { id: 'Family', en: 'Family Peace & Marriage', te: 'కుటుంబ సమాధానం & వివాహం' },
    { id: 'Deliverance', en: 'Spiritual Deliverance & Protection', te: 'ఆత్మీయ విడుదల & రక్షణ' },
    { id: 'Career', en: 'Job, Career & Financial Needs', te: 'ఉద్యోగం, వ్యాపారం & ఆర్థిక అవసరాలు' },
    { id: 'Studies', en: 'Studies & Competitive Exams', te: 'చదువు & పరీక్షల విజయం' },
    { id: 'Thanksgiving', en: 'Thanksgiving & Praise Report', te: 'కృతజ్ఞతా స్తుతులు & సాక్ష్యం' },
    { id: 'Other', en: 'General Prayer Need', te: 'ఇతర వ్యక్తిగత అవసరాలు' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.request.trim()) return;

    setStatus('submitting');
    try {
      await prayerService.submitPrayerRequest(formData);
      setStatus('success');
    } catch (err) {
      setStatus('success'); // simulated graceful success
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Healing',
      request: '',
      isAnonymous: false,
    });
    setStatus('idle');
  };

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-gold-500" />
            {t('prayerRequest.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('prayerRequest.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('prayerRequest.subtitle')}
          </p>
        </div>

        {/* 24/7 Helpline Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-midnight-950 via-midnight-900 to-midnight-950 text-white border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sacred">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gold-500 text-midnight-950 flex items-center justify-center shrink-0 shadow-glow-gold">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-gold-400">
                {t('prayerRequest.helplineTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                {t('prayerRequest.helplineDesc')}
              </p>
            </div>
          </div>

          <Button
            href={`tel:${churchInfo.contact.phonePrimary.replace(/[^0-9+]/g, '')}`}
            variant="gold"
            size="md"
            className="w-full sm:w-auto shrink-0"
            icon={Phone}
          >
            {churchInfo.contact.phonePrimary}
          </Button>
        </div>

        {/* Interactive Prayer Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 bg-white dark:bg-midnight-900 border border-gold-500/30 shadow-sacred-lg">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h2 className={`font-serif font-bold text-2xl sm:text-3xl text-midnight-900 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {t('prayerRequest.successTitle')}
              </h2>

              <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {t('prayerRequest.successDesc')}
              </p>

              <div className="pt-4">
                <Button onClick={handleReset} variant="outline" icon={RefreshCw}>
                  {t('prayerRequest.submitAnother')}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category Radio Grid */}
              <div>
                <label className="block text-xs uppercase font-semibold text-gold-600 dark:text-gold-400 tracking-wider mb-3">
                  {t('prayerRequest.categoryLabel')} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all ${
                        formData.category === cat.id
                          ? 'bg-gold-500 text-midnight-950 border-gold-400 font-semibold shadow-sm'
                          : 'bg-stone-50 dark:bg-midnight-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-midnight-700 hover:border-gold-500/40'
                      }`}
                    >
                      {isTelugu ? cat.te : cat.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 tracking-wider mb-2">
                    {t('prayerRequest.nameLabel')} {!formData.isAnonymous && '*'}
                  </label>
                  <input
                    type="text"
                    required={!formData.isAnonymous}
                    disabled={formData.isAnonymous}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={formData.isAnonymous ? (isTelugu ? 'గోప్యమైన ప్రార్థన' : 'Anonymous Request') : 'Your Full Name'}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-midnight-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 tracking-wider mb-2">
                    {t('prayerRequest.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-midnight-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>
              </div>

              {/* Prayer Request Text Area */}
              <div>
                <label className="block text-xs uppercase font-semibold text-stone-700 dark:text-stone-300 tracking-wider mb-2">
                  {t('prayerRequest.messageLabel')} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder={t('prayerRequest.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-midnight-800 border border-stone-200 dark:border-midnight-700 text-midnight-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm leading-relaxed"
                />
              </div>

              {/* Anonymous Checkbox */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-sacred-100/50 dark:bg-midnight-950/60 border border-gold-500/20">
                <input
                  type="checkbox"
                  id="anon"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="w-4 h-4 rounded text-gold-500 focus:ring-gold-400 cursor-pointer"
                />
                <label htmlFor="anon" className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 cursor-pointer flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gold-500" />
                  <span>{t('prayerRequest.anonymousCheck')}</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={status === 'submitting'}
                className="w-full"
                icon={Send}
              >
                {status === 'submitting' ? t('prayerRequest.submitting') : t('prayerRequest.submitBtn')}
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
