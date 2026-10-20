import React from 'react';
import { Hero } from '../components/home/Hero';
import { DailyVerseSection } from '../components/home/DailyVerseSection';
import { MeaningOfMahanaim } from '../components/home/MeaningOfMahanaim';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { MinistriesPreview } from '../components/home/MinistriesPreview';
import { TestimoniesSection } from '../components/home/TestimoniesSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { MapAndLocationSection } from '../components/home/MapAndLocationSection';

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <DailyVerseSection />
      <MeaningOfMahanaim />
      <FounderSpotlight />
      <MinistriesPreview />
      <TestimoniesSection />
      <GalleryPreview />
      <MapAndLocationSection />
    </div>
  );
};
