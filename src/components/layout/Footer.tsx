import { Link } from "react-router-dom";
import { Box, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <span className="font-display text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
                ANIX <span className="text-white/50">Technology</span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
              Modular intelligence for the global enterprise. Constructing the next generation of digital infrastructure.
            </p>
            <div className="flex gap-4">
               {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm hover:bg-brand-blue hover:text-black transition-all">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Services", "Portfolio", "About", "Pricing"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`} className="text-white/40 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Ecosystem</h4>
            <ul className="flex flex-col gap-4">
              {["Documentation", "Client Portal", "Careers", "Security", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Headquarters</h4>
            <p className="text-white/40 text-sm leading-loose">
              120 Block Ave, Voxel City<br />
              Enterprise District 404<br />
              Digital World
            </p>
            <div className="mt-8 p-4 border border-white/5 bg-white/[0.02] rounded-sm">
               <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">System Status</p>
               <div className="flex items-center gap-2 mt-2">
                 <div className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse" />
                 <span className="text-xs font-mono text-white/60">All systems operational</span>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 ANIX Technology. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            Built with modular intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
