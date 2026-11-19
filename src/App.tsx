import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { ProductShowcase } from './components/ProductShowcase';
import { Manufacturing } from './components/Manufacturing';
import { WhyUs } from './components/WhyUs';
import { BrandStory } from './components/BrandStory';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleExploreCollections = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutBrand = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreCraft = () => {
    const el = document.getElementById('manufacturing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenInquiry = (subject: string = 'General Manufacturing Inquiry') => {
    setContactSubject(subject);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-dark selection:bg-luxury-gold/30 selection:text-luxury-dark font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreCollections={handleExploreCollections}
          onAboutBrand={handleAboutBrand}
        />

        {/* 2. About Us */}
        <About
          onExploreCraft={handleExploreCraft}
        />

        {/* 3. Handbag Collections (8 Categories) */}
        <Collections
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Featured Products / Showcase (8 Handbags with detailed view modal) */}
        <ProductShowcase
          selectedCategoryFilter={selectedCategoryFilter}
          onFilterChange={setSelectedCategoryFilter}
          onInquire={handleOpenInquiry}
        />

        {/* 5. Manufacturing & Production Journey (4 Steps) */}
        <Manufacturing
          onInquireManufacturing={() => handleOpenInquiry('Manufacturing Process & Production Specs')}
        />

        {/* 6. Why Byte Bridges India / Core Principles */}
        <WhyUs />

        {/* 7. Visual Brand Story (Editorial full-width campaign) */}
        <BrandStory
          onInquire={() => handleOpenInquiry('Brand Story & Production Collaboration')}
        />

        {/* 8. Gallery / A Closer Look (Masonry & Lightbox) */}
        <Gallery />

        {/* 9. Contact & Business Inquiries */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* 10. Footer with Legal Policies and Navigation */}
      <Footer />
    </div>
  );
}

export default App;
