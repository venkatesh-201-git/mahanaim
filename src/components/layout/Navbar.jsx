import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Moon, Sun, HeartHandshake, 
  ChevronDown, ChevronRight, BookOpen, Video, Calendar, Image, History, User, Book, Phone,
  Home, Info, Heart, Sparkles, Globe
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const Navbar = ({ onOpenSearch }) => {
  const { lang, setLang, t, isTelugu } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/about', label: t('nav.about'), icon: Info },
    { to: '/jesus', label: t('nav.jesus'), icon: Heart },
    { to: '/bible', label: t('nav.bible'), icon: BookOpen },
    { to: '/ministries', label: t('nav.ministries'), icon: Sparkles },
    { to: '/sermons', label: t('nav.sermons'), icon: Video },
    { to: '/events', label: t('nav.events'), icon: Calendar },
    { to: '/gallery', label: t('nav.gallery'), icon: Image },
  ];

  const moreLinks = [
    { to: '/testimonies', label: t('nav.testimonies'), icon: HeartHandshake },
    { to: '/history', label: t('nav.history'), icon: History },
    { to: '/people', label: t('nav.people'), icon: User },
    { to: '/books', label: t('nav.books'), icon: Book },
    { to: '/contact', label: t('nav.contact'), icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/98 dark:bg-[#0c172b]/98 backdrop-blur-xl border-b border-stone-200/90 dark:border-gold-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.06)] select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Fixed Logo */}
        <div className="shrink-0 flex items-center">
          <Logo />
        </div>

        {/* Center: Desktop Navigation in Straight Single Line */}
        <nav className="hidden xl:flex items-center gap-1 shrink-0 whitespace-nowrap">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap relative ${
                  isActive
                    ? 'text-gold-600 dark:text-gold-400 font-extrabold'
                    : 'text-black dark:text-stone-200 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-500/10'
                } ${isTelugu ? 'font-telugu text-[13.5px]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-[2.5px] bg-gold-500 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* More Menu Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm font-bold text-black dark:text-stone-200 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-500/10 transition-colors whitespace-nowrap"
            >
              <span className={isTelugu ? 'font-telugu text-[13.5px]' : ''}>{isTelugu ? 'మరిన్ని' : 'More'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-gold-500/30 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                {moreLinks.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors ${
                          isActive
                            ? 'bg-gold-500/15 text-gold-600 dark:text-gold-400 font-bold'
                            : 'text-black dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-midnight-800 hover:text-gold-600'
                        } ${isTelugu ? 'font-telugu' : ''}`
                      }
                    >
                      <ItemIcon className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="whitespace-nowrap font-medium">{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          {/* Simple Language Switcher */}
          <div className="inline-flex items-center bg-stone-100 dark:bg-midnight-800 p-0.5 rounded-xl border border-stone-300 dark:border-midnight-700 shrink-0 shadow-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-gold-500 text-black shadow-sm'
                  : 'text-black dark:text-stone-300 hover:text-gold-600 dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('te')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg font-telugu transition-all ${
                lang === 'te'
                  ? 'bg-gold-500 text-black shadow-sm'
                  : 'text-black dark:text-stone-300 hover:text-gold-600 dark:hover:text-white'
              }`}
            >
              తెలుగు
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-black dark:text-stone-300 hover:bg-gold-500/10 hover:text-gold-600 border border-stone-300 dark:border-midnight-800 transition-colors shrink-0 shadow-xs"
            aria-label="Toggle dark/light mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-black" />}
          </button>

          {/* Prayer Request CTA */}
          <Button
            to="/prayer"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex whitespace-nowrap shrink-0 font-bold"
            icon={HeartHandshake}
          >
            {t('nav.quickPrayer')}
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 dark:bg-midnight-900 text-black dark:text-white hover:bg-gold-500/20 hover:text-gold-600 border border-stone-300 dark:border-midnight-700 shadow-xs transition-colors shrink-0 active:scale-95"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-600 dark:text-gold-400" /> : <Menu className="w-5 h-5 text-black dark:text-stone-100" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Solid High-Contrast, Crystal Clear & Mobile Responsive */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-white dark:bg-[#0c172b] border-t border-gold-500/30 overflow-y-auto shadow-2xl flex flex-col justify-between animate-in fade-in slide-in-from-top-3 duration-200"
          style={{ height: 'calc(100dvh - 4rem)' }}
        >
          <div className="p-4 sm:p-5 space-y-5 max-w-lg mx-auto w-full">
            
            {/* Group 1: Main Pages */}
            <div>
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-xs uppercase font-bold text-gold-600 dark:text-gold-400 tracking-wider">
                  {isTelugu ? 'ముఖ్య విభాగాలు' : 'Main Pages'}
                </span>
                <span className="text-[11px] text-stone-400 dark:text-stone-500 font-medium">
                  {navLinks.length} {isTelugu ? 'పేజీలు' : 'Pages'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-1.5">
                {navLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all border ${
                          isActive
                            ? 'bg-gold-500/15 border-gold-500/40 text-gold-700 dark:text-gold-300 shadow-xs'
                            : 'bg-stone-50 dark:bg-midnight-900/80 border-stone-200/70 dark:border-midnight-800 text-stone-800 dark:text-stone-100 hover:bg-gold-500/10 hover:border-gold-500/30'
                        } ${isTelugu ? 'font-telugu text-[14.5px]' : ''}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isActive 
                                ? 'bg-gold-500 text-midnight-950' 
                                : 'bg-gold-500/10 dark:bg-gold-500/20 text-gold-600 dark:text-gold-400'
                            }`}>
                              <LinkIcon className="w-4 h-4" />
                            </div>
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-600 dark:text-gold-400' : 'text-stone-400 dark:text-stone-500'}`} />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Group 2: More Resources & Details */}
            <div>
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-xs uppercase font-bold text-gold-600 dark:text-gold-400 tracking-wider">
                  {isTelugu ? 'వనరులు & వివరాలు' : 'More Resources'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-1.5">
                {moreLinks.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          isActive
                            ? 'bg-gold-500/15 border-gold-500/40 text-gold-700 dark:text-gold-300 font-semibold shadow-xs'
                            : 'bg-stone-50 dark:bg-midnight-900/60 border-stone-200/60 dark:border-midnight-800 text-stone-700 dark:text-stone-200 hover:bg-gold-500/10'
                        } ${isTelugu ? 'font-telugu text-[14px]' : ''}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              isActive 
                                ? 'bg-gold-500 text-midnight-950' 
                                : 'bg-gold-500/10 dark:bg-gold-500/20 text-gold-600 dark:text-gold-400'
                            }`}>
                              <ItemIcon className="w-3.5 h-3.5" />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-600 dark:text-gold-400' : 'text-stone-400 dark:text-stone-500'}`} />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions in Mobile Menu (Language, Theme & Prayer) */}
            <div className="pt-2 pb-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {/* Language selection card */}
                <button
                  onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-100 dark:bg-midnight-900 border border-stone-200 dark:border-midnight-700 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:border-gold-500/50"
                >
                  <Globe className="w-4 h-4 text-gold-500" />
                  <span>{lang === 'en' ? 'తెలుగుకు మార్చండి' : 'Switch to English'}</span>
                </button>

                {/* Theme toggle card */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-100 dark:bg-midnight-900 border border-stone-200 dark:border-midnight-700 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:border-gold-500/50"
                >
                  {isDark ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-midnight-900" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              {/* Big Prayer Request Button */}
              <Button
                to="/prayer"
                variant="gold"
                size="lg"
                className="w-full shadow-md py-3.5 text-base"
                icon={HeartHandshake}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('prayerRequest.submitBtn')}
              </Button>

              <p className="text-center text-[11px] text-stone-500 dark:text-stone-400 pt-1">
                {isTelugu ? 'మహనయీము ప్రార్థన మినిస్ట్రీస్ • కండ్లగుంట' : 'Mahanaim Prayer Ministries • Kandlagunta'}
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
