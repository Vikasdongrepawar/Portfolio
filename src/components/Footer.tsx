import { motion } from "motion/react";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Case Study", path: "/case-study" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <footer className="w-full bg-[#161617] pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[12px] font-normal text-[#86868b]">
           <div className="space-y-4">
              <div className="text-white font-semibold uppercase tracking-widest text-[10px]">Links</div>
              <ul className="space-y-3">
                 {navLinks.map(link => (
                   <li key={link.name}><a href={link.path} className="hover:underline">{link.name}</a></li>
                 ))}
              </ul>
           </div>
           <div className="space-y-4">
              <div className="text-white font-semibold uppercase tracking-widest text-[10px]">Legal</div>
              <ul className="space-y-3">
                 <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                 <li><a href="#" className="hover:underline">Terms of Service</a></li>
                 <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              </ul>
           </div>
           <div className="space-y-4">
              <div className="text-white font-semibold uppercase tracking-widest text-[10px]">Connect</div>
              <ul className="space-y-3">
                 <li><a href="https://www.linkedin.com/in/vikas-dongre-86370128b/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                 <li><a href="https://github.com/Vikasdongrepawar" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                 <li><a href="https://x.com/VikasDongr69029" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
              </ul>
           </div>
           <div className="space-y-4">
              <div className="text-white font-semibold uppercase tracking-widest text-[10px]">Location</div>
              <p className="leading-relaxed">Bhopal, Madhya Pradesh<br />India — Crafting Excellence.</p>
           </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-4 text-[11px] text-[#86868b]">
           <p>More ways to build: Find a developer near you. Or call +91 -VIKAS.</p>
           <div className="flex flex-col md:flex-row justify-between gap-4">
              <p>© 2026 Vikas Dongre. Digital Craftsmanship. Built with precision.</p>
              <div className="flex items-center gap-6">
                 <span>Privacy Policy</span>
                 <span>Terms of Use</span>
                 <span>Sales and Refunds</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
