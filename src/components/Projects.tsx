import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PROJECTS } from "../constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
           <h2 className="text-4xl md:text-6xl font-semibold tracking-tight apple-gradient-text">Selected Work.</h2>
           <p className="text-on-surface-variant text-xl">High-end applications designed for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onClick={() => setSelectedProject(project)}
              className="sf-card flex flex-col group h-[600px] relative overflow-hidden cursor-pointer"
            >
              <div className="p-12 z-10 space-y-4 relative flex flex-col h-full">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest w-fit mb-2">
                  {project.tags[0]}
                </div>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="text-on-surface-variant text-lg max-w-sm line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="mt-auto flex items-center gap-6">
                  <span className="sf-button-primary">
                    Learn more
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()} 
                    className="sf-button-secondary"
                  >
                    GitHub {'>'}
                  </a>
                </div>
              </div>

              {project.image && (
                <div className="absolute inset-0 z-0">
                   <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s] pointer-events-none" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1d1d1f] w-full max-w-3xl rounded-apple overflow-hidden relative z-10 border border-white/10"
            >
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20"
               >
                 <span className="material-symbols-outlined">close</span>
               </button>

               {selectedProject.image && (
                 <div className="w-full h-48 md:h-64 overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               )}

               <div className="p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {selectedProject.year && <span className="text-primary font-semibold text-xs tracking-widest uppercase">{selectedProject.year}</span>}
                      <h3 className="text-4xl font-semibold text-white tracking-tight">{selectedProject.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white text-sm font-semibold uppercase tracking-widest">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tags.map(tag => (
                         <span key={tag} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/80">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="sf-button-primary px-8">Live Preview</a>
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="sf-button-secondary">GitHub Repository</a>
                    {selectedProject.caseStudy && (
                      <Link to="/case-study" className="text-primary hover:underline text-sm font-medium flex items-center gap-2">
                        Read Case Study {'>'}
                      </Link>
                    )}
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
