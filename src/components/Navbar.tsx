import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";

export default function Navbar() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBagOpen, setIsBagOpen] = useState(false);

  const filteredProjects = searchQuery.trim() === "" 
    ? [] 
    : PROJECTS.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  // Close search on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setIsBagOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Case Study", path: "/case-study" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 sf-glass-nav h-[44px] flex items-center">
        <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
             <span className="material-symbols-outlined text-[20px]">terminal</span>
             <span className="text-[14px] font-semibold tracking-tight text-white">Vikas Dongre</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[12px] font-normal text-[#f5f5f7]/80">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-white transition-colors ${
                  location.pathname === link.path ? "text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="material-symbols-outlined text-[18px] opacity-80 hover:opacity-100 transition-opacity"
            >
              search
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsBagOpen(!isBagOpen)}
                className="material-symbols-outlined text-[18px] opacity-80 hover:opacity-100 transition-opacity"
              >
                shopping_bag
              </button>
              
              <AnimatePresence>
                {isBagOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-64 bg-[#1d1d1f] rounded-apple border border-white/10 p-6 shadow-2xl z-[60]"
                  >
                    <p className="text-center text-zinc-500 text-[13px] font-normal">Your bag is empty.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex flex-col items-center pt-24 px-6 overflow-y-auto"
          >
             <div className="w-full max-w-2xl space-y-12 pb-24">
                <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                  <span className="material-symbols-outlined text-[#f5f5f7]/40 text-2xl">search</span>
                  <input 
                    autoFocus
                    type="text"
                    placeholder="Search projects, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-2xl md:text-4xl text-white font-medium w-full placeholder:text-white/10"
                  />
                  <button 
                   onClick={() => setIsSearchOpen(false)}
                   className="material-symbols-outlined text-white/40 hover:text-white transition-colors"
                  >
                    close
                  </button>
                </div>

                {searchQuery.trim() !== "" ? (
                   <div className="space-y-6">
                      <div className="text-[11px] uppercase tracking-widest text-[#86868b] font-semibold">Search Results</div>
                      {filteredProjects.length > 0 ? (
                        <div className="grid gap-4">
                          {filteredProjects.map(project => (
                            <Link 
                              key={project.title}
                              to="/projects"
                              className="group flex items-center justify-between p-4 rounded-apple-inner bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                            >
                               <div className="flex items-center gap-4">
                                  {project.image && (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5">
                                      <img src={project.image} alt="" className="w-full h-full object-cover opacity-60" />
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-white font-medium group-hover:text-primary transition-colors">{project.title}</div>
                                    <div className="text-[12px] text-zinc-500">{project.tags.join(', ')}</div>
                                  </div>
                               </div>
                               <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">arrow_forward</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white/40 italic">No matches found for "{searchQuery}"</p>
                      )}
                   </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-[11px] uppercase tracking-widest text-[#86868b] font-semibold">Quick Links</div>
                    <div className="flex flex-col gap-4">
                        {navLinks.slice(1).map(link => (
                          <Link 
                            key={link.name} 
                            to={link.path}
                            className="text-white/80 hover:text-primary transition-colors text-lg font-medium"
                          >
                            {link.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
