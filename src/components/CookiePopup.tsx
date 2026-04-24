import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import PremiumButton from "./ui/PremiumButton";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-[100] max-w-md w-[calc(100vw-4rem)]"
          id="cookie-popup"
        >
          <div className="glass border border-white/10 p-8 relative overflow-hidden group">
            {/* Animated accent background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 blur-3xl rounded-full group-hover:bg-brand-blue/20 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-display uppercase tracking-widest mb-1">Cookie Protocol</h4>
                  <p className="text-white/40 text-xs font-mono leading-relaxed uppercase tracking-tighter">
                    We use cookies to enhance your journey through the matrix and analyze our signal traffic.
                  </p>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-4">
                <PremiumButton 
                  variant="primary" 
                  onClick={acceptCookies}
                  className="flex-1 py-3 text-[10px] tracking-[0.2em]"
                >
                  Authorize
                </PremiumButton>
                <button 
                  onClick={declineCookies}
                  className="flex-1 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/5 hover:border-white/20"
                >
                  Decline
                </button>
              </div>
            </div>

            {/* Matrix-like border lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
