import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLockup from '../assets/bezalel-logo-lockup.png';

const STORAGE_KEY = 'bezalel-intro-seen';
// Video is 8 seconds; the fallback timer only fires if the video never reports "ended".
const INTRO_FALLBACK_MS = 9000;
const INTRO_VIDEO = '/videos/intro.mp4';
const INTRO_POSTER = '/videos/intro-poster.jpg';

function alreadySeen(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function markSeen(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* storage unavailable: intro simply shows again */
  }
}

export const IntroSection: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(() => !alreadySeen());

  useEffect(() => {
    if (!visible) return;
    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      markSeen();
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      markSeen();
      setVisible(false);
    }, INTRO_FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const finish = () => {
    markSeen();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] bg-[#0A1628] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={INTRO_VIDEO}
            poster={INTRO_POSTER}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finish}
            onError={finish}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent pointer-events-none" />

          <div className="absolute inset-x-0 bottom-10 sm:bottom-16 flex justify-center px-6 pointer-events-none">
            <motion.img
              src={logoLockup}
              alt="Bezalel Media - Crafted with Purpose."
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 5.5, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-60 sm:w-80 md:w-96 max-w-[80vw]"
            />
          </div>

          <button
            type="button"
            onClick={finish}
            className="absolute bottom-6 right-6 z-10 text-[11px] tracking-[0.24em] uppercase text-white/80 border border-white/30 px-4 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSection;
