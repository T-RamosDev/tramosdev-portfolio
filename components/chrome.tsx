"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CommandPalette } from "./command-palette";
import { localeNames, type Locale } from "@/data/i18n";
import { useLocale } from "./locale-context";
import { BrandLogo } from "./brand/logo";

function CursorAccent() {
  const [position, setPosition] = useState({ x: -30, y: -30 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event: PointerEvent) => setActive(Boolean((event.target as HTMLElement).closest("a, button, input")));
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  return (
    <div
      className={`cursor-accent ${active ? "active" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}

export function SiteChrome() {
  const { locale, setLocale, t } = useLocale();
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

  return (
    <>
      <CursorAccent />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#top" aria-label="T-Ramos Dev, home">
          <BrandLogo compact />
        </a>
        <nav className="desktop-nav" aria-label={t.chrome.primaryNav}>
          {t.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <label className="locale-select">
            <span className="sr-only">Idioma</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label="Idioma">
              {(Object.keys(localeNames) as Locale[]).map((key) => <option key={key} value={key}>{localeNames[key]}</option>)}
            </select>
          </label>
          <CommandPalette />
          <button className="menu-button icon-button" onClick={() => setMenu(!menu)} aria-label={t.chrome.toggleMenu} aria-expanded={menu}>
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {menu && (
        <nav className="mobile-nav" aria-label={t.chrome.mobileNav}>
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
