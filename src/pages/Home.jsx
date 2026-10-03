import React from 'react';
import { Hero } from '../components/home/Hero';
import { DailyVerseSection } from '../components/home/DailyVerseSection';
import { MeaningOfMahanaim } from '../components/home/MeaningOfMahanaim';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { JesusSpotlight } from '../components/home/JesusSpotlight';
import { MinistriesPreview } from '../components/home/MinistriesPreview';
import { UpcomingEventsSection } from '../components/home/UpcomingEventsSection';
import { SermonsPreview } from '../components/home/SermonsPreview';
import { TestimoniesSection } from '../components/home/TestimoniesSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { PrayerCTASection } from '../components/home/PrayerCTASection';
import { MapAndLocationSection } from '../components/home/MapAndLocationSection';

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <DailyVerseSection />
      <MeaningOfMahanaim />
      <FounderSpotlight />
      <JesusSpotlight />
      <MinistriesPreview />
      <UpcomingEventsSection />
      <SermonsPreview />
      <TestimoniesSection />
      <GalleryPreview />
      <PrayerCTASection />
      <MapAndLocationSection />
    </div>
  );
};
