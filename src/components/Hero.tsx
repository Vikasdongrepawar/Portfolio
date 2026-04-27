import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MagneticWrapper from "./MagneticWrapper";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-4"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src={`${import.meta.env.BASE_URL}myimage-new.jpg`}
              alt="Vikas Dongre"
              className="w-full h-full object-cover rounded-full transition-opacity duration-700" 
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-black flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[14px]">verified</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="apple-gradient-text text-5xl md:text-8xl font-semibold tracking-tight leading-[1.05]"
        >
          Built for performance. <br className="hidden md:block" />
          Designed for precision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mt-6"
        >
          Building scalable MERN applications — from
          database design to cloud deployment.
          Based in Bhopal, available globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <MagneticWrapper>
            <Link to="/projects" className="sf-button-primary scale-110 px-8 py-3 block">View Projects</Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link to="/services" className="sf-button-secondary scale-110 block">Learn more {'>'}</Link>
          </MagneticWrapper>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 w-full max-w-5xl aspect-video rounded-apple overflow-hidden border border-white/5"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DAoTbWHgFLqsrNSeLGiLtP-eHWDAaooEVmO1TxhXYnNQF8uIKM5Hwvv6lm3VJbwWIJA7-EMTLSL_B93tRwvEKVVirTfuRiG2XRZrPiIvFwStfoTxL1w_fkxU1__r996Ye9s7lyaJLxR-iGbTQ2kFVgNBojjUeKEmnYIpsopl-5Kwie8P2FfG0narxgcFXQRtXuCudBFU8CTsaQmHaZgX0pRtbhgknS7iZfJw75Z0Ku6mVxC0JI3z2XpGgXP74S76OPtMHI2QskM"
          alt="Dashboard Preview"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
    </section>
  );
}