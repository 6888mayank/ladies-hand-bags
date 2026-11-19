import React, { useState } from 'react';
import { MANUFACTURING_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ManufacturingProps {
  onInquireManufacturing: () => void;
}

export const Manufacturing: React.FC<ManufacturingProps> = ({ onInquireManufacturing }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = MANUFACTURING_STEPS[activeStepIndex];

  return (
    <section id="manufacturing" className="py-24 sm:py-32 bg-luxury-dark text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-luxury-brown/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-gold">
              Production Journey
            </span>
            <div className="w-6 h-[1px] bg-luxury-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            From Concept to Creation.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-luxury-sand/85 font-light leading-relaxed">
            Every handbag begins with an idea and takes shape through careful design, material selection, skilled workmanship and attention to finishing.
          </p>
        </div>

        {/* Step Navigation Pill Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {MANUFACTURING_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 sm:p-5 text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'border-luxury-gold bg-luxury-charcoal/90 text-white shadow-xl'
                    : 'border-white/10 bg-luxury-charcoal/30 text-luxury-sand/70 hover:border-white/30 hover:bg-luxury-charcoal/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-sm tracking-widest font-semibold ${
                      isActive ? 'text-luxury-lightgold' : 'text-luxury-taupe'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-luxury-gold" />}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide truncate">
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Layout */}
        <div className="bg-luxury-charcoal/70 border border-luxury-sand/15 p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Step Story Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-light text-luxury-gold">
                  {currentStep.number}
                </span>
                <div className="w-12 h-[1px] bg-luxury-gold/50" />
                <span className="text-xs uppercase tracking-[0.25em] text-luxury-sand/70 font-medium">
                  Atelier Phase
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
                  {currentStep.title}
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-luxury-lightgold mt-1">
                  {currentStep.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-luxury-sand/85 font-light leading-relaxed">
                {currentStep.description}
              </p>

              {/* Highlights Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h5 className="text-[11px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
                  Core Benchmarks in this Phase:
                </h5>
                <ul className="space-y-2.5">
                  {currentStep.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-luxury-sand/90">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onInquireManufacturing}
                  className="px-6 py-3 bg-luxury-gold hover:bg-luxury-lightgold text-luxury-dark text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
                >
                  <span>Discuss Manufacturing Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="text-xs text-luxury-sand/60 font-mono tracking-wider">
                  Phase {activeStepIndex + 1} of {MANUFACTURING_STEPS.length}
                </div>
              </div>
            </div>

            {/* Step Imagery */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-luxury-gold/30 shadow-2xl">
                <img
                  key={currentStep.number}
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-luxury-sand bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
                  <span className="font-serif italic tracking-wide text-white">
                    Byte Bridges India Production Standard
                  </span>
                  <span className="font-mono text-luxury-lightgold text-[11px]">
                    STP-{currentStep.number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Capacity & Facility Statement */}
        <div className="mt-14 p-6 sm:p-8 bg-luxury-charcoal/40 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-4 md:pt-0">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-luxury-gold">
              Quality Assurance
            </span>
            <span className="block font-serif text-xl sm:text-2xl text-white mt-1">
              Multi-Point White Glove
            </span>
            <span className="block text-xs text-luxury-sand/70 mt-1 font-light">
              Dimensional, tensile &amp; visual verification
            </span>
          </div>

          <div className="pt-4 md:pt-0 md:px-4">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-luxury-gold">
              Artisan Techniques
            </span>
            <span className="block font-serif text-xl sm:text-2xl text-white mt-1">
              Hand-Creased &amp; Skived
            </span>
            <span className="block text-xs text-luxury-sand/70 mt-1 font-light">
              Finished with multi-coat Italian edge resins
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-luxury-gold">
              Production Versatility
            </span>
            <span className="block font-serif text-xl sm:text-2xl text-white mt-1">
              OEM &amp; Private Label
            </span>
            <span className="block text-xs text-luxury-sand/70 mt-1 font-light">
              Tailored development for luxury retailers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
