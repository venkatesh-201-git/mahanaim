import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero = () => {
  const { lang, isTelugu } = useLanguage();

  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[600px] bg-[#0A182E] text-white overflow-hidden py-6 sm:py-10 md:py-12 flex flex-col items-center justify-center select-none">
      
      {/* 1. Crystal Clear Mountain Sunrise & Water Background Image */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <source media="(max-width: 640px)" srcSet="/bg-sm.webp" type="image/webp" />
        <source media="(min-width: 641px)" srcSet="/bg.webp" type="image/webp" />
        <img
          src="/vd.mp4"
          alt="Majestic Mountain Sunrise over Lake"
          width="1920"
          height="800"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center brightness-105 contrast-105"
        />
      </picture>

      {/* 2. Flowing Water Shimmer & Wave Ripple Animation Overlay on Lower Lake Area (Transparent, Vivid Lake Visible) */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none z-[1] overflow-hidden">
        {/* Continuous Flowing Water Reflection Shimmer */}
        <div 
          className="absolute inset-0 opacity-45 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.35)_30%,rgba(56,189,248,0.4)_50%,rgba(255,255,255,0.35)_70%,transparent_100%)] bg-[length:200%_100%] animate-[flowingWater_4s_linear_infinite]"
        />
        
        {/* Subtle Horizontal Water Waves */}
        <div 
          className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.4)_0%,transparent_75%)] animate-[pulse_3s_ease-in-out_infinite]"
        />

        {/* SVG Flowing Water Ripple Lines */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-30" 
          viewBox="0 0 1000 200" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 50 Q 250 30, 500 50 T 1000 50 L 1000 200 L 0 200 Z" 
            fill="rgba(56, 189, 248, 0.2)"
            className="animate-[waveMove_5s_ease-in-out_infinite_alternate]"
          />
          <path 
            d="M0 110 Q 250 85, 500 110 T 1000 110 L 1000 200 L 0 200 Z" 
            fill="rgba(254, 240, 138, 0.15)"
            className="animate-[waveMove_3.5s_ease-in-out_infinite_alternate]"
          />
        </svg>

        {/* Subtle Clean Bottom Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A182E]/70 via-transparent to-transparent" />
      </div>

      {/* 3. Subtle Edge Vignette to keep text readable without darkening mountains */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A182E]/30 via-transparent to-[#0A182E]/50 pointer-events-none z-[1]" />
      
      {/* Central Golden Aura Light behind Jesus */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[380px] md:w-[440px] h-[260px] sm:h-[380px] md:h-[440px] bg-radial-gradient from-amber-400/25 via-gold-500/15 to-transparent blur-xl sm:blur-2xl pointer-events-none rounded-full z-[2]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        
        {/* Central Jesus Container with Rotating Sunrays Behind Head */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[390px] my-1 sm:my-2">
          
          {/* Rotating Sunrays & Divine Sacred Aura Halo (Decreased Size, Ultra-Crisp, High-Clarity Sun & Beams) */}
          <div className="absolute top-[18%] sm:top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] sm:w-[290px] sm:h-[290px] md:w-[350px] md:h-[350px] pointer-events-none z-0">
            
            {/* Luminous Brilliant Core Sun Disc */}
            <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#FEF08A_35%,#FBBF24_70%,transparent_100%)] opacity-100 blur-[2px] sm:blur-[4px] animate-pulse" />
            <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#FFFBEB_50%,#FDE047_100%)] opacity-100 shadow-[0_0_20px_#FFFBEB,0_0_35px_#F59E0B]" />

            {/* Rotating Sacred Sunrays SVG - 32 Ultra-Clear Radiant Beams */}
            <svg 
              viewBox="0 0 500 500" 
              className="w-full h-full animate-[spin_32s_linear_infinite] drop-shadow-[0_0_18px_rgba(251,191,36,1)] sm:drop-shadow-[0_0_25px_rgba(245,158,11,1)]"
              fill="none"
            >
              <defs>
                <radialGradient id="sacredSunHeroRayGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="18%" stopColor="#FFFBEB" stopOpacity="1" />
                  <stop offset="38%" stopColor="#FEF08A" stopOpacity="1" />
                  <stop offset="65%" stopColor="#FBBF24" stopOpacity="0.95" />
                  <stop offset="88%" stopColor="#F59E0B" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* 32 Radiating Sacred Sunray Beams with high-definition sharpness */}
              {Array.from({ length: 32 }).map((_, i) => {
                const angle = (i * 360) / 32;
                const isCardinal = i % 8 === 0;
                const isMajor = i % 2 === 0;
                return (
                  <path
                    key={i}
                    d={isCardinal
                      ? "M250 250 L238 12 L250 0 L262 12 Z"
                      : isMajor 
                        ? "M250 250 L240 24 L250 10 L260 24 Z" 
                        : "M250 250 L243 50 L250 36 L257 50 Z"
                    }
                    fill="url(#sacredSunHeroRayGrad)"
                    stroke="#FFFBEB"
                    strokeWidth={isCardinal ? "1.5" : isMajor ? "1" : "0.75"}
                    strokeOpacity={isCardinal ? "0.9" : "0.7"}
                    transform={`rotate(${angle} 250 250)`}
                    opacity={isCardinal ? 1.0 : isMajor ? 0.95 : 0.85}
                  />
                );
              })}

              {/* Outer Golden Aura Rings with Crystal Clear Definition */}
              <circle cx="250" cy="250" r="190" stroke="#FEF08A" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.95" />
              <circle cx="250" cy="250" r="155" stroke="#FBBF24" strokeWidth="2.5" opacity="1" />
              <circle cx="250" cy="250" r="120" stroke="#FFFBEB" strokeWidth="2" strokeDasharray="4 4" opacity="0.95" />
            </svg>
          </div>

          {/* Divine Blessing Rays Streaming from Hands (Refined Scaled Size & Crystal-Clear Definition) */}
          {/* Left Hand Radiant Beams */}
          <div className="absolute top-[44%] left-[24%] -translate-x-1/2 -translate-y-1/2 w-[125px] xs:w-[165px] sm:w-[220px] md:w-[270px] pointer-events-none z-10">
            {/* Palm Sparkle Flashes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-white blur-[1px] shadow-[0_0_20px_#FFFFFF,0_0_35px_#F59E0B] animate-ping opacity-95" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-radial from-white via-yellow-200 to-amber-400 blur-[2px] animate-pulse opacity-100" />
            
            <svg viewBox="0 0 240 240" className="w-full h-auto overflow-visible opacity-100 filter drop-shadow-[0_0_15px_rgba(251,191,36,1)]">
              <defs>
                <linearGradient id="blessingHandRayLeft" x1="50%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="15%" stopColor="#FFFBEB" stopOpacity="1" />
                  <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#FBBF24" stopOpacity="0.85" />
                  <stop offset="88%" stopColor="#F59E0B" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="120,8 -20,170 15,210" fill="url(#blessingHandRayLeft)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.6" className="animate-pulse opacity-90" />
              <polygon points="120,8 25,215 65,230" fill="url(#blessingHandRayLeft)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.7" className="animate-pulse opacity-100" />
              <polygon points="120,8 75,235 115,225" fill="url(#blessingHandRayLeft)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.6" className="animate-pulse opacity-95" />
              <polygon points="120,8 -35,120 -5,155" fill="url(#blessingHandRayLeft)" stroke="#FFFBEB" strokeWidth="0.5" strokeOpacity="0.5" className="animate-pulse opacity-85" />
              <polygon points="120,8 120,240 145,230" fill="url(#blessingHandRayLeft)" stroke="#FFFBEB" strokeWidth="0.5" strokeOpacity="0.5" className="animate-pulse opacity-80" />
            </svg>
          </div>

          {/* Right Hand Radiant Beams */}
          <div className="absolute top-[44%] right-[24%] translate-x-1/2 -translate-y-1/2 w-[125px] xs:w-[165px] sm:w-[220px] md:w-[270px] pointer-events-none z-10">
            {/* Palm Sparkle Flashes */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-white blur-[1px] shadow-[0_0_20px_#FFFFFF,0_0_35px_#F59E0B] animate-ping opacity-95" />
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-radial from-white via-yellow-200 to-amber-400 blur-[2px] animate-pulse opacity-100" />
            
            <svg viewBox="0 0 240 240" className="w-full h-auto overflow-visible opacity-100 filter drop-shadow-[0_0_15px_rgba(251,191,36,1)]">
              <defs>
                <linearGradient id="blessingHandRayRight" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="15%" stopColor="#FFFBEB" stopOpacity="1" />
                  <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#FBBF24" stopOpacity="0.85" />
                  <stop offset="88%" stopColor="#F59E0B" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="120,8 260,170 225,210" fill="url(#blessingHandRayRight)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.6" className="animate-pulse opacity-90" />
              <polygon points="120,8 215,215 175,230" fill="url(#blessingHandRayRight)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.7" className="animate-pulse opacity-100" />
              <polygon points="120,8 165,235 125,225" fill="url(#blessingHandRayRight)" stroke="#FFFBEB" strokeWidth="0.75" strokeOpacity="0.6" className="animate-pulse opacity-95" />
              <polygon points="120,8 275,120 245,155" fill="url(#blessingHandRayRight)" stroke="#FFFBEB" strokeWidth="0.5" strokeOpacity="0.5" className="animate-pulse opacity-85" />
              <polygon points="120,8 120,240 95,230" fill="url(#blessingHandRayRight)" stroke="#FFFBEB" strokeWidth="0.5" strokeOpacity="0.5" className="animate-pulse opacity-80" />
            </svg>
          </div>

          {/* Jesus Image (Razor-Sharp, Golden Backlit, Instant WebP Loading) */}
          <div className="relative z-10 w-full drop-shadow-[0_0_35px_rgba(251,191,36,0.45)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
            <picture>
              <source media="(max-width: 640px)" srcSet="/jesusu2-sm.webp" type="image/webp" />
              <source media="(min-width: 641px)" srcSet="/jesusu2.webp" type="image/webp" />
              <img
                src="/jesusu2.png"
                alt="Lord Jesus Christ Blessing"
                width="340"
                height="410"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain select-none max-h-[260px] xs:max-h-[300px] sm:max-h-[380px] md:max-h-[430px] block"
              />
            </picture>
          </div>

          {/* Pastor David Raju - Unified Transparent Glass Card */}
          <div className="relative z-20 -mt-3 xs:-mt-4 sm:-mt-6 md:-mt-8 inline-flex items-center gap-2.5 sm:gap-3.5 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full p-1.5 sm:p-2 pl-2 pr-4 sm:pr-6 max-w-[95vw] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-amber-300/60 transition-all select-none">
            
            {/* Pastor Photo with Subtle Halo Ring */}
            <div className="relative shrink-0">
              <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400/80 via-white/90 to-amber-300/80 shadow-[0_0_12px_rgba(251,191,36,0.5)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-midnight-900">
                  <picture>
                    <source srcSet="/david-raju-sm.webp" type="image/webp" />
                    <img
                      src="/david raju.png"
                      alt="Rev. Ch. David Raju Garu"
                      width="64"
                      height="64"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Founder Text - Unified & Clean (Same Visibility, Not Highlighted As Separate Section) */}
            <div className="flex flex-col text-left justify-center leading-tight overflow-hidden pr-1">
              <span className="text-[11px] xs:text-xs sm:text-xs font-semibold text-amber-300 tracking-wider whitespace-nowrap">
                {isTelugu ? 'వ్యవస్థాపకులు' : 'Founder'}
              </span>
              <span className="text-xs xs:text-sm sm:text-base font-bold text-white whitespace-nowrap font-serif tracking-wide mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate">
                {isTelugu ? 'రెవ. సి. హెచ్. డేవిడ్ రాజు గారు' : 'Rev. Ch. David Raju Garu'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
