import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0 transition-all group-hover:bg-primary/10" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        
        <div className="flex items-center text-primary font-semibold text-sm cursor-pointer group-hover:gap-2 transition-all">
          <span>المزيد من التفاصيل</span>
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
