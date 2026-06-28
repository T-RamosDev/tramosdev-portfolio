"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CommandPalette } from "./command-palette";
import { useContent } from "./content";
import { BrandLogo } from "./brand/logo";

export function SiteChrome() {
  const t = useContent();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menu]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#top" aria-label="T-RAMOS DEV, início">
          <BrandLogo compact />
        </a>
        <nav className="desktop-nav" aria-label={t.chrome.primaryNav}>
          {t.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <CommandPalette />
          <button className="menu-button icon-button" onClick={() => setMenu(!menu)} aria-label={t.chrome.toggleMenu} aria-expanded={menu} aria-controls="mobile-navigation">
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {menu && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label={t.chrome.mobileNav}>
          {t.nav.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenu(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
