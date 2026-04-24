import { useEffect } from "react";
import { motion } from "motion/react";
import VoxelHero from "@/src/components/Three/VoxelHero";
import { ArrowRight, Bot, Code, Palette, Settings, Database, LineChart, Shield, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PremiumButton from "@/src/components/ui/PremiumButton";
import MarqueeLogos from "@/src/components/ui/MarqueeLogos";

const services = [
  { icon: Bot, title: "AI Chatbots", desc: "Intelligent conversational agents powered by LLMs.", isAI: true },
  { icon: Code, title: "Web/App Dev", desc: "Bespoke digital solutions with modern frameworks.", isAI: false },
  { icon: Palette, title: "UI/UX Design", desc: "Minimalist, futuristic interfaces that convert.", isAI: false },
  { icon: Database, title: "CRM Systems", desc: "Customized business management platforms.", isAI: false },
  { icon: Zap, title: "Automation", desc: "End-to-end workflow optimization.", isAI: true },
  { icon: Shield, title: "Cloud Security", desc: "Enterprise-grade infrastructure protection.", isAI: false },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <VoxelHero />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-brand-blue mb-4 block">
              Global Intelligence • Enterprise Ready
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-8 py-4">
               Building Tomorrow <br />
               With <span className="text-white/40 italic">Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Cutting-edge digital technology providing AI solutions, automation, branding, and enterprise transformation services worldwide.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <Link to="/contact">
               <PremiumButton variant="primary" className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
               </PremiumButton>
             </Link>
             <Link to="/contact">
               <PremiumButton variant="outline">
                  Book Consultation
               </PremiumButton>
             </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Trusted By / Marquee */}
      <section className="py-0">
        <MarqueeLogos />
      </section>

      {/* Services Preview - Mini Minecraft Voxel Feel */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
               <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-6">
                 Services for the <span className="text-white/40">Post-Digital Era</span>
               </h2>
               <p className="text-lg text-white/50">
                 We bridge the gap between imagination and execution using modular technological blocks.
               </p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-brand-blue group transition-colors">
              Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-12 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all overflow-hidden"
              >
                {/* Voxel pattern background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                   <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
                      {Array.from({length: 16}).map((_, j) => (
                        <div key={j} className="border border-white" />
                      ))}
                   </div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm group-hover:bg-brand-blue/20 group-hover:border-brand-blue/50 transition-all">
                      <item.icon className="w-6 h-6 text-white group-hover:text-brand-blue transition-colors" />
                    </div>
                    {item.isAI && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                        <Sparkles className="w-3 h-3 text-brand-blue" />
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue">AI Powered</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-24 text-center relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-8 relative z-10 leading-[1.1]">
              Ready to construct <br />
              your <span className="text-brand-blue">future?</span>
           </h2>
           <button className="px-10 py-5 bg-brand-blue text-black font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all animate-block-pop relative z-10">
              Start Building Now
           </button>
        </div>
      </section>
    </div>
  );
}
