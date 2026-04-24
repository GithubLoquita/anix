import { motion } from "motion/react";

const logos = [
  "MISTRAL", "OPENAI", "ANTHROPIC", "DEEPMIND", "NVIDIA", "TESLA", 
  "MISTRAL", "OPENAI", "ANTHROPIC", "DEEPMIND", "NVIDIA", "TESLA"
];

export default function MarqueeLogos() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/[0.01] py-12">
      <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
        {logos.map((logo, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-display font-medium tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors uppercase"
          >
            {logo}
          </span>
        ))}
      </div>

      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-24 items-center pl-24">
        {logos.map((logo, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-display font-medium tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors uppercase"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
