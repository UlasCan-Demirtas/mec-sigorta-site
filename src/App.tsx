import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FastQuote from "./pages/FastQuote";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { content } from "./data/content";

function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.img
          src="/logo.png"
          alt={content.company.name}
          className="h-32 w-auto"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [0.85, 6.0, 10.0] }}
          transition={{ duration: 1.8, times: [0, 0.25, 1], ease: "easeOut" }}
        />

        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 0], y: [8, 0, 0] }}
          transition={{ duration: 1.0, times: [0, 0.25, 1], ease: "easeOut" }}
        >
          <div className="text-3xl font-extrabold tracking-tight text-gray-900">
            {content.company.name}
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {content.company.owner} • {content.company.city}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/hizmetler"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/hizli-teklif"
          element={
            <PageTransition>
              <FastQuote />
            </PageTransition>
          }
        />
        <Route
          path="/iletisim"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <Splash onDone={() => setShowSplash(false)} />}
      </AnimatePresence>

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}