import { motion } from "motion/react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:vikasdongre952@gmail.com?subject=${encodeURIComponent(formData.subject || "Project Inquiry")}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white font-display">Get in Touch.</h2>
          <p className="text-on-surface-variant text-xl md:text-2xl font-normal leading-relaxed">
            Have an idea? Let's build something <br className="hidden md:block" />
            extraordinary together.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#1d1d1f] border border-white/10 rounded-apple p-8 md:p-16 shadow-2xl relative z-10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest pl-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Steve Jobs"
                  className="w-full bg-black/30 border border-white/5 rounded-apple-inner px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest pl-1">Your Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="steve@apple.com"
                  className="w-full bg-black/30 border border-white/5 rounded-apple-inner px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest pl-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="High-end MERN Project"
                className="w-full bg-black/30 border border-white/5 rounded-apple-inner px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest pl-1">Message</label>
              <textarea 
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your vision..."
                className="w-full bg-black/30 border border-white/5 rounded-apple-inner px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[13px] text-[#86868b] max-w-xs text-center md:text-left">
                By clicking "Send Message", your default email client will open with the details pre-filled.
              </p>
              <button 
                type="submit"
                className="sf-button-primary w-full md:w-auto px-12 py-4 scale-110 active:scale-95 transition-transform"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </motion.div>

        <div className="text-center">
            <a 
              href="https://forms.gle/your-actual-google-form-id" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline font-medium text-lg flex items-center justify-center gap-2"
            >
              Prefer Google Forms? Click here {'>'}
            </a>
            <p className="text-[#86868b] text-sm mt-2 font-mono">vikasdongre952@gmail.com</p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
