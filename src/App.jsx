import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Jesus } from './pages/Jesus';
import { Bible } from './pages/Bible';
import { BibleBookDetail } from './pages/BibleBookDetail';
import { Sermons } from './pages/Sermons';
import { Events } from './pages/Events';
import { Ministries } from './pages/Ministries';
import { Prayer } from './pages/Prayer';
import { Testimonies } from './pages/Testimonies';
import { History } from './pages/History';
import { People } from './pages/People';
import { Books } from './pages/Books';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Auto scroll to top on route change
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const App = () => {
  return (
    <>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jesus" element={<Jesus />} />
          <Route path="bible" element={<Bible />} />
          <Route path="bible/:book" element={<BibleBookDetail />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="events" element={<Events />} />
          <Route path="event/:id" element={<Events />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="ministry/:id" element={<Ministries />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="testimonies" element={<Testimonies />} />
          <Route path="history" element={<History />} />
          <Route path="people" element={<People />} />
          <Route path="books" element={<Books />} />
          <Route path="resources" element={<Books />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
