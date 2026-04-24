import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Command as CommandIcon, ArrowRight, Zap, Shield, Info, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items = [
    { name: "Services", icon: Zap, path: "/services" },
    { name: "Portfolio", icon: Shield, path: "/portfolio" },
    { name: "About Us", icon: Info, path: "/about" },
    { name: "Contact", icon: Code, path: "/contact" },
  ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-sm shadow-2xl overflow-hidden"
      >
        <div className="flex items-center px-6 border-b border-white/5 py-4">
           <Search className="w-5 h-5 text-white/40 mr-4" />
           <input 
             autoFocus
             placeholder="Search commands (e.g. Services, About...)"
             className="bg-transparent border-none outline-none text-lg w-full font-sans tracking-tight"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
           />
           <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/40">
             <span className="text-[12px]">ESC</span>
           </div>
        </div>

        <div className="p-2">
           {items.length > 0 ? (
             items.map((item, i) => (
               <button
                 key={i}
                 onClick={() => {
                   navigate(item.path);
                   setIsOpen(false);
                 }}
                 className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-sm transition-colors group"
               >
                 <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-white/40 group-hover:text-brand-blue" />
                    <span className="text-white/60 group-hover:text-white font-display uppercase tracking-wider">{item.name}</span>
                 </div>
                 <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-brand-blue" />
               </button>
             ))
           ) : (
             <div className="p-8 text-center text-white/20 text-sm font-mono uppercase tracking-widest">
               No command blocks found
             </div>
           )}
        </div>

        <div className="bg-white/[0.02] px-6 py-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-widest">
           <span>Navigate with arrows</span>
           <span>ANIX_OS v1.0.4</span>
        </div>
      </motion.div>
    </div>
  );
}
