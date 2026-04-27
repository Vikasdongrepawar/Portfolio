/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AIBot from "./components/AIBot";
import Footer from "./components/Footer";
import SupernovaCaseStudy from "./components/SupernovaCaseStudy";
import CustomCursor from "./components/CustomCursor";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </PageWrapper>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/case-study" element={<PageWrapper><SupernovaCaseStudy /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="min-h-screen flex flex-col cursor-none">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <AIBot />
        <Footer />
      </div>
    </Router>
  );
}
