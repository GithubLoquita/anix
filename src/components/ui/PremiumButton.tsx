import { motion, HTMLMotionProps } from "motion/react";
import { useMagnetic } from "@/src/hooks/useMagnetic";
import { cn } from "@/src/lib/utils";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "brand";
}

export default function PremiumButton({ children, variant = "primary", className, ...props }: PremiumButtonProps) {
  const { ref, x, y } = useMagnetic();

  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
    outline: "bg-transparent border border-white/20 text-white hover:border-white",
    brand: "bg-brand-blue text-black hover:bg-brand-blue/90"
  };

  return (
    <motion.button
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "px-8 py-4 font-bold uppercase text-[10px] tracking-widest rounded-sm transition-colors animate-block-pop focus:outline-none focus:ring-2 focus:ring-brand-blue/50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
