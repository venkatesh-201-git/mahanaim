import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchModal } from '../common/SearchModal';
import { ScrollProgress } from '../common/ScrollProgress';
import { BackToTop } from '../common/BackToTop';

export const Layout = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-sacred-50 text-stone-900 dark:bg-midnight-950 dark:text-stone-100 selection:bg-gold-500 selection:text-midnight-950">
      <ScrollProgress />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};
