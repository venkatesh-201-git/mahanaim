import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero = () => {
  const { lang, isTelugu } = useLanguage();

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[540px] bg-midnight-950 text-white overflow-hidden py-6 sm:py-10 md:py-12 flex flex-col items-center justify-center select-none">
      
      {/* Background Video (Optimized 1080p for instant load & ultra-smooth 60/30fps playback without lag) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 brightness-105 contrast-105 pointer-events-none will-change-transform"
      >
        <source src="/13167255_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Gentle Soft Vignette / Edge Gradient for Clean Section Transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/40 via-transparent to-midnight-950/60 z-[1] pointer-events-none" />

      {/* Background Sacred Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[600px] h-[340px] sm:h-[500px] md:h-[600px] bg-radial-gradient from-amber-500/20 via-gold-500/10 to-transparent blur-2xl sm:blur-3xl pointer-events-none rounded-full z-[2]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        
        {/* Central Jesus Container with Rotating Sunrays Behind Head */}
        <div className="relative flex items-center justify-center w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[360px] my-1 sm:my-3">
          
          {/* Rotating Sunrays & Orange-Yellow Sacred Aura Halo (Accurately positioned directly behind Jesus' head) */}
          <div className="absolute top-[18%] sm:top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] xs:w-[210px] xs:h-[210px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px] pointer-events-none z-0">
            
            {/* Luminous Inner Orange & Yellow Mixed Sun Disc */}
            <div className="absolute inset-[14%] rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 opacity-80 blur-md sm:blur-lg animate-pulse" />
            <div className="absolute inset-[24%] rounded-full bg-gradient-to-tr from-yellow-300 via-amber-300 to-orange-400 opacity-95 blur-xs sm:blur-sm" />

            {/* Rotating Sacred Sunrays SVG */}
            <svg 
              viewBox="0 0 500 500" 
              className="w-full h-full animate-[spin_25s_linear_infinite] drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] sm:drop-shadow-[0_0_25px_rgba(245,158,11,0.85)]"
              fill="none"
            >
              <defs>
                <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF3A8" stopOpacity="1" />
                  <stop offset="30%" stopColor="#FFB800" stopOpacity="0.9" />
                  <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 24 Radiating Sacred Sunray Beams */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const isMajor = i % 2 === 0;
                return (
                  <path
                    key={i}
                    d={isMajor 
                      ? "M250 250 L243 25 L250 8 L257 25 Z" 
                      : "M250 250 L245 55 L250 40 L255 55 Z"
                    }
                    fill="url(#rayGrad)"
                    transform={`rotate(${angle} 250 250)`}
                    opacity={isMajor ? 0.95 : 0.7}
                  />
                );
              })}

              {/* Outer Golden/Amber Aura Rings */}
              <circle cx="250" cy="250" r="160" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 6" opacity="0.65" />
              <circle cx="250" cy="250" r="130" stroke="#F59E0B" strokeWidth="1.2" opacity="0.5" />
            </svg>
          </div>

          {/* Divine Blessing Rays Streaming from Hands */}
          {/* Left Hand Rays */}
          <div className="absolute top-[48%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-[130px] xs:w-[160px] sm:w-[200px] pointer-events-none z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-200 blur-xs shadow-[0_0_15px_#F59E0B] animate-ping opacity-75" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-transparent blur-sm animate-pulse" />
            
            <svg viewBox="0 0 200 200" className="w-full h-auto overflow-visible opacity-85 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
              <defs>
                <linearGradient id="handRayLeft" x1="50%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7C2" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#FBBF24" stopOpacity="0.75" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="100,10 0,150 30,180" fill="url(#handRayLeft)" className="animate-pulse opacity-60" />
              <polygon points="100,10 35,190 70,200" fill="url(#handRayLeft)" className="animate-pulse opacity-80" />
              <polygon points="100,10 75,200 110,190" fill="url(#handRayLeft)" className="animate-pulse opacity-70" />
              <polygon points="100,10 -10,110 15,140" fill="url(#handRayLeft)" className="animate-pulse opacity-50" />
            </svg>
          </div>

          {/* Right Hand Rays */}
          <div className="absolute top-[48%] right-[28%] translate-x-1/2 -translate-y-1/2 w-[130px] xs:w-[160px] sm:w-[200px] pointer-events-none z-10">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-200 blur-xs shadow-[0_0_15px_#F59E0B] animate-ping opacity-75" />
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-l from-yellow-300 via-amber-400 to-transparent blur-sm animate-pulse" />
            
            <svg viewBox="0 0 200 200" className="w-full h-auto overflow-visible opacity-85 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]">
              <defs>
                <linearGradient id="handRayRight" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7C2" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#FBBF24" stopOpacity="0.75" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="100,10 200,150 170,180" fill="url(#handRayRight)" className="animate-pulse opacity-60" />
              <polygon points="100,10 165,190 130,200" fill="url(#handRayRight)" className="animate-pulse opacity-80" />
              <polygon points="100,10 125,200 90,190" fill="url(#handRayRight)" className="animate-pulse opacity-70" />
              <polygon points="100,10 210,110 185,140" fill="url(#handRayRight)" className="animate-pulse opacity-50" />
            </svg>
          </div>

          {/* Jesus Image (Centered, mobile-friendly size, crisp transparency) */}
          <div className="relative z-10 w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
            <img
              src="/jesusu2.png"
              alt="Lord Jesus Christ Blessing"
              loading="eager"
              className="w-full h-auto object-contain select-none max-h-[250px] xs:max-h-[290px] sm:max-h-[360px] md:max-h-[410px]"
            />
          </div>

        </div>

        {/* Pastor David Raju - Founder Card (Exactly Below Jesus Image) */}
        <div className="relative z-20 mt-1 sm:mt-2 inline-flex items-center gap-2 sm:gap-3.5 bg-midnight-950/90 backdrop-blur-md border border-gold-500/50 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 pl-2 pr-3.5 sm:pr-6 max-w-[95vw] shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:border-gold-400 hover:scale-[1.02] transition-all group select-none">
          {/* Pastor Photo */}
          <div className="relative w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold-400 shrink-0 shadow-md bg-midnight-900">
            <img
              src="/david raju.png"
              alt="Rev. Ch. David Raju Garu"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Top: వ్యవస్థాపకులు / Founder | Bottom: రెవ. సి. హెచ్. డేవిడ్ రాజు గారు */}
          <div className="flex flex-col text-left justify-center leading-tight overflow-hidden">
            {/* Top: వ్యవస్థాపకులు */}
            <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-gold-400 tracking-wider whitespace-nowrap flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shrink-0" />
              <span>{isTelugu ? 'వ్యవస్థాపకులు' : 'Founder'}</span>
            </span>

            {/* Bottom: రెవ. సి. హెచ్. డేవిడ్ రాజు గారు */}
            <span className="text-xs xs:text-sm sm:text-base font-bold text-amber-200 dark:text-gold-200 whitespace-nowrap font-serif tracking-wide drop-shadow-sm mt-0.5 truncate">
              {isTelugu ? 'రెవ. సి. హెచ్. డేవిడ్ రాజు గారు' : 'Rev. Ch. David Raju Garu'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
