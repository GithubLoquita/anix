import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Home from "@/src/pages/Home";
import CommandPalette from "@/src/components/CommandPalette";
import CookiePopup from "@/src/components/CookiePopup";
import { cn } from "@/src/lib/utils";
import { Box, Sparkles } from "lucide-react";

// Dashboard Component
const Dashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-5xl font-display font-medium">Inquiry <span className="text-white/40 italic">Dashboard</span></h1>
        <div className="text-xs font-mono text-white/30 uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2">
           Total Leads: {leads.length}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-1">
         {loading ? (
            <div className="p-12 text-center bg-white/[0.02] border border-white/5 text-white/20 font-mono uppercase tracking-[0.2em] animate-pulse">
               Accessing Encrypted Data...
            </div>
         ) : leads.length > 0 ? (
           leads.map((lead, i) => (
             <div key={i} className="p-8 bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.05] transition-all">
                <div>
                   <h3 className="text-xl font-display uppercase tracking-wider mb-1">{lead.name}</h3>
                   <p className="text-sm font-mono text-brand-blue mb-4">{lead.email}</p>
                   <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/40 uppercase">
                        {lead.service || "General"}
                      </span>
                      <span className={cn("px-3 py-1 border rounded text-[10px] font-mono uppercase", 
                        lead.status === "new" ? "bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald" : "bg-white/5 border-white/10 text-white/40"
                      )}>
                        {lead.status}
                      </span>
                   </div>
                </div>
                <div className="max-w-md text-sm text-white/50 bg-black/40 p-4 border border-white/5 rounded-sm">
                  {lead.message || "No message provided."}
                </div>
             </div>
           ))
         ) : (
           <div className="p-12 text-center bg-white/[0.02] border border-white/5 text-white/20 font-mono uppercase tracking-[0.2em]">
              No active transmission detected.
           </div>
         )}
      </div>
    </div>
  );
};

// Simple Page Components (Skeletons to be expanded if time permits)
const About = () => <div className="pt-32 pb-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-24 items-center">
      <div className="flex-1">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-12 uppercase tracking-tighter leading-[0.9]">
          Engineering <br/><span className="text-white/30 italic">New Realities</span>
        </h1>
        <p className="text-xl text-white/50 leading-relaxed max-w-xl mb-12">
          ANIX Technology is a global team of architects, engineers, and visionaries. We build the digital backbone of the next-generation enterprise using modular intelligence and world-class design.
        </p>
        <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
           <div>
             <h4 className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-2">Our Vision</h4>
             <p className="text-sm text-white/40">To be the primary module in the global technology stack.</p>
           </div>
           <div>
             <h4 className="text-brand-emerald font-mono text-xs uppercase tracking-widest mb-2">Our Mission</h4>
             <p className="text-sm text-white/40">Constructing scalable solutions with surgical precision.</p>
           </div>
        </div>
      </div>
      <div className="flex-1 w-full aspect-square bg-white/[0.02] border border-white/5 relative overflow-hidden group">
         {/* Decorative Voxel Decoration */}
         <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
            {Array.from({length: 36}).map((_, i) => (
              <div key={i} className="border border-white/20 hover:bg-brand-blue/20 transition-colors" />
            ))}
         </div>
      </div>
    </div>

    {/* Founder Section */}
    <div className="mt-32 pt-32 border-t border-white/5">
       <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter mb-4">Founder & <span className="text-white/30 italic">Visionary</span></h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto" />
       </div>
       
       <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1">
             <h3 className="text-5xl font-display font-bold mb-2">Sandip Hembram</h3>
             <p className="text-brand-blue font-mono text-sm uppercase tracking-[0.2em] mb-8">Owner, Founder & CEO</p>
             <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                As the architect behind ANIX Technology, Sandip Hembram envisions a world where technology and intelligence are modular, accessible, and infinitely scalable. His leadership drives our team to push the boundaries of what's possible in the digital landscape.
             </p>
          </div>
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md">
             <div className="relative group">
                {/* Image Frame/Border effect */}
                <div className="absolute -inset-4 border border-brand-blue/20 group-hover:border-brand-blue/50 transition-colors duration-500 rounded-sm" />
                <div className="absolute -inset-1 border border-white/10" />
                
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5">
                   <img 
                     src="https://res.cloudinary.com/doq1ara3j/image/upload/v1774261488/WhatsApp_Image_2026-03-23_at_3.54.23_PM_jtwdgc.jpg" 
                     alt="Sandip Hembram" 
                     className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                   />
                   {/* Overlay */}
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Voxel Accent */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-brand-blue/10 border border-brand-blue/30 backdrop-blur-sm flex items-center justify-center">
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</div>;

const Services = () => <div className="pt-32 pb-24 px-6 text-center">
  <h1 className="text-6xl font-display font-medium mb-4 uppercase tracking-tighter">Premium Solutions</h1>
  <p className="text-brand-blue font-mono text-xs uppercase tracking-[0.3em] mb-12">Built to scale. Designed to last.</p>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {[
      { name: "AI Chatbot Development", isAI: true },
      { name: "Web & App Development", isAI: false },
      { name: "UI/UX Design", isAI: false },
      { name: "CRM Systems", isAI: false },
      { name: "Invoice Solutions", isAI: false },
      { name: "Cloud Solutions", isAI: false },
      { name: "Branding & Marketing", isAI: false },
      { name: "Automation Systems", isAI: true },
      { name: "Custom SaaS Development", isAI: true }
    ].map((s, i) => (
      <div key={i} className="p-12 glass border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col justify-between relative group">
         <div className="flex justify-between items-start mb-4">
           <h3 className="text-2xl font-display">{s.name}</h3>
           {s.isAI && (
             <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-full group-hover:border-brand-blue/30 transition-colors">
               <Sparkles className="w-3 h-3 text-brand-blue" />
               <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue">AI</span>
             </div>
           )}
         </div>
         <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-brand-blue transition-colors text-left">Learn More →</button>
      </div>
    ))}
  </div>
</div>;

const Portfolio = () => <div className="pt-32 pb-24 px-6 text-center">
  <h1 className="text-6xl font-display font-medium mb-12">Case Studies</h1>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity" />
        <div className="absolute bottom-8 left-8 text-left">
          <p className="text-xs font-mono text-brand-blue uppercase mb-2">Project 0{i}</p>
          <h3 className="text-3xl font-display uppercase">Quantum Nexus {i}</h3>
        </div>
      </div>
    ))}
  </div>
</div>;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: "General" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", service: "General" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-display font-medium mb-8 uppercase tracking-tighter">Initiate <br/><span className="text-white/40 italic">Link</span></h1>
        <div className="bg-white/[0.02] border border-white/5 p-12 text-left relative overflow-hidden">
          {status === "success" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center text-center p-8">
               <h3 className="text-2xl font-display uppercase tracking-widest mb-2">Signal Received</h3>
               <p className="text-white/50 text-sm mb-6">Your data has been encrypted and stored in our block matrix.</p>
               <button onClick={() => setStatus("idle")} className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">Send Another</button>
            </motion.div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                required
                type="text" 
                placeholder="IDENTIFIER (NAME)" 
                className="bg-transparent border border-white/10 p-4 w-full font-mono text-xs focus:border-brand-blue outline-none transition-colors" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                required
                type="email" 
                placeholder="LOCATOR (EMAIL)" 
                className="bg-transparent border border-white/10 p-4 w-full font-mono text-xs focus:border-brand-blue outline-none transition-colors" 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <select 
              className="bg-transparent border border-white/10 p-4 w-full font-mono text-xs focus:border-brand-blue outline-none transition-colors appearance-none"
              value={formData.service}
              onChange={e => setFormData({ ...formData, service: e.target.value })}
            >
              <option className="bg-black">SELECT MODULE</option>
              <option className="bg-black">AI SOLUTIONS</option>
              <option className="bg-black">WEB DEVELOPMENT</option>
              <option className="bg-black">AUTOMATION SYSTEMS</option>
              <option className="bg-black">UI/UX DESIGN</option>
            </select>
            <textarea 
              required
              placeholder="TRANSMISSION CONTENT" 
              rows={6} 
              className="bg-transparent border border-white/10 p-4 w-full font-mono text-xs focus:border-brand-blue outline-none transition-colors" 
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
            <button 
              disabled={status === "sending"}
              className="w-full py-5 bg-white text-black font-bold uppercase text-xs tracking-widest animate-block-pop disabled:opacity-50"
            >
              {status === "sending" ? "Encrypting..." : "Transmit Signal"}
            </button>
          </form>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a href="https://wa.me/something" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#25D366] text-white font-bold uppercase text-[10px] tracking-widest text-center hover:opacity-90 transition-opacity">
               WhatsApp Direct
            </a>
            <a href="mailto:contact@anix.tech" className="flex-1 py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-widest text-center hover:border-white transition-colors">
               Email Query
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => <div className="pt-32 pb-24 px-6 text-center">
   <h1 className="text-6xl font-display font-medium mb-12">Service Tiers</h1>
   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Starter", "Growth", "Enterprise"].map((tier, i) => (
        <div key={i} className={cn("p-12 border transition-all", i === 1 ? "bg-white/[0.05] border-brand-blue/50 scale-105" : "border-white/5 hover:border-white/20")}>
           <h3 className="text-xl font-mono uppercase tracking-[0.2em] mb-4">{tier}</h3>
           <div className="text-4xl font-display mb-8">Custom Quote</div>
           <ul className="text-left text-sm text-white/50 space-y-4 mb-12">
             <li>• Core Voxel Integration</li>
             <li>• Custom Branding</li>
             <li>• 24/7 Priority Support</li>
           </ul>
           <button className={cn("w-full py-4 text-[10px] font-bold uppercase tracking-widest border animate-block-pop", i === 1 ? "bg-brand-blue text-black border-transparent" : "border-white/10 hover:border-white")}>Select Tier</button>
        </div>
      ))}
   </div>
</div>;

const Careers = () => <div className="pt-32 pb-24 px-6 text-center">
  <h1 className="text-6xl font-display font-medium mb-8">Join the Build</h1>
  <p className="max-w-2xl mx-auto text-white/50 mb-12">Search for modular opportunities across the globe.</p>
  <div className="max-w-4xl mx-auto flex flex-col gap-1 items-start">
    {["Senior AI Engineer", "Frontend Architect", "UI Designer", "System Operator"].map((job, i) => (
      <div key={i} className="w-full p-8 bg-white/[0.02] border border-white/5 flex justify-between items-center hover:bg-white/[0.05] transition-all cursor-pointer group">
         <span className="text-xl font-display">{job}</span>
         <span className="text-[10px] font-mono text-brand-blue uppercase group-hover:translate-x-2 transition-transform">Apply Now →</span>
      </div>
    ))}
  </div>
</div>;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-blue selection:text-black">
      <ScrollToTop />
      <Navbar />
      <CommandPalette />
      <CookiePopup />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
