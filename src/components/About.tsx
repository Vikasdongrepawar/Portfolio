import { motion } from "motion/react";

export default function About() {
  const stats = [
    { label: "Projects Shipped", value: "5+" },
    { label: "Years Building", value: "2+" },
    { label: "Technologies", value: "10+" },
    { label: "Clients Served", value: "3+" },
  ];

  const technologies = ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Tailwind CSS"];

  return (
    <section className="py-32 px-6 bg-[#161617]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-block relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 mb-4">
               <img 
                 src="/myimage-new.jpg" 
                 alt="Vikas"
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -top-2 -right-2 bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-tighter">Available</div>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Engineering excellence. <br />
            For the web.
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl font-normal leading-relaxed">
            I am Vikas Dongre. My approach is defined by a relentless focus on performance 
            and a dedication to intuitive user interfaces. I don't just write code; 
            I build experiences that feel native to the web.
          </p>
          <p className="text-on-surface-variant text-base">
            Specializing in the MERN stack with a Pro focus on microservices and real-time data flows.
          </p>
          <div className="flex flex-wrap gap-3">
             {technologies.map(tech => (
               <span key={tech} className="bg-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-white/60">{tech}</span>
             ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
           {stats.map((stat, idx) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               className="sf-card p-10 flex flex-col items-center justify-center text-center gap-2 border border-white/5"
             >
               <div className="text-4xl font-bold tracking-tighter text-white">{stat.value}</div>
               <div className="text-[11px] uppercase tracking-widest text-[#86868b] font-medium">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
