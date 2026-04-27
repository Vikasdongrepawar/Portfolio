import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Engineering",
      subtitle: "Scalable MERN Solutions.",
      icon: "💻",
      desc: "Engineering end-to-end web applications with MongoDB, Express, React, and Node.js. Focused on clean architecture, secure API design, and performance-first frontend experiences.",
    },
    {
      title: "Dynamic Commerce",
      subtitle: "High-Conversion Storefronts.",
      icon: "🛒",
      desc: "Building native-feeling e-commerce platforms with unified payment integrations (Razorpay) and optimized checkout flows designed for scale.",
    },
    {
      title: "Intelligent Infrastructure",
      subtitle: "AI & Cloud Deployment.",
      icon: "⚡",
      desc: "Integrating intelligent features like real-time facial recognition (Face API.js) and deploying containerized microservices on AWS ECS Fargate with automated CI/CD pipelines.",
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-4">
           <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white font-display">Capabilities.</h2>
           <p className="text-on-surface-variant text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
             Engineering the future of digital interaction. <br className="hidden md:block" />
             Thoughtfully designed for scale.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
               key={service.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ scale: 1.02, y: -5 }}
               transition={{ delay: idx * 0.1, duration: 0.5 }}
               className="sf-card p-10 flex flex-col gap-2 h-auto group text-left border border-white/10 hover:border-white/20"
            >
               <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
               <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">{service.title}</h3>
               <div className="text-lg font-medium text-primary mb-2 italic tracking-tight">{service.subtitle}</div>
               <p className="text-on-surface-variant text-[15px] leading-relaxed font-normal">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#1d1d1f] rounded-apple p-16 md:p-24 text-center space-y-8">
           <h3 className="text-5xl md:text-7xl font-semibold tracking-tight apple-gradient-text">Ready to build?</h3>
           <p className="text-on-surface-variant text-xl">Transforming ideas into high-performance realities.</p>
           <a href="#contact" className="sf-button-primary px-12 py-4 scale-125 inline-block">Get started</a>
        </div>
      </div>
    </section>
  );
}
