import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, MapPin, Phone, Mail, Send, CheckCircle2, 
  Youtube, Facebook, Instagram, MessageCircle, Heart, ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { churchInfo } from '../../data/churchInfo';
import { Logo } from '../common/Logo';

export const Footer = () => {
  const { lang, setLang, t, isTelugu } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-midnight-950 text-stone-300 relative overflow-hidden border-t border-gold-500/25">
      {/* Subtle sacred ambient light background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient from-gold-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Ministry Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="large" lightModeOnly={true} />
            
            <p className={`text-sm text-stone-400 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
              {t('footer.aboutText')}
            </p>

            {/* Scripture Pill */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-gold-500/20 text-xs italic text-gold-300">
              {t('footer.verseQuote')}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={churchInfo.social.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-midnight-950 text-stone-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href={churchInfo.social.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-midnight-950 text-stone-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={churchInfo.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-midnight-950 text-stone-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${churchInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white text-stone-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp Prayer Line"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link to="/jesus" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.jesus')}</span>
                </Link>
              </li>
              <li>
                <Link to="/bible" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.bible')}</span>
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.sermons')}</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.events')}</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                  <span>{t('nav.gallery')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Ministries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              {t('footer.resourcesTitle')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/prayer" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-gold-400 font-medium">
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t('nav.prayer')}</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonies" className="hover:text-gold-400 transition-colors">
                  {t('nav.testimonies')}
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-gold-400 transition-colors">
                  {t('nav.history')}
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-gold-400 transition-colors">
                  {t('nav.people')}
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-gold-400 transition-colors">
                  {t('nav.books')}
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-gold-400 transition-colors">
                  {t('nav.ministries')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              {t('footer.contactTitle')}
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{churchInfo.address.street[lang]}, {churchInfo.address.village[lang]}, PIN {churchInfo.address.pincode}, {churchInfo.address.district[lang]}, {churchInfo.address.state[lang]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{churchInfo.contact.phonePrimary}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{churchInfo.contact.email}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs text-stone-400 mb-2">
                {t('footer.newsletterDesc')}
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-white/10 text-white placeholder-stone-400 text-xs px-3 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-gold-500 text-midnight-950 hover:bg-gold-400 transition-colors font-medium shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t('footer.subscribed')}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-stone-300 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/about" className="hover:text-stone-300 transition-colors">
              {t('footer.terms')}
            </Link>
            <button 
              onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
              className="text-gold-400 hover:underline"
            >
              {lang === 'en' ? 'తెలుగులో చూడండి' : 'Switch to English'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
