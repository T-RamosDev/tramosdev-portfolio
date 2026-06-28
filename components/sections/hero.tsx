"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useLocale } from "../locale-context";
import { Reveal } from "../ui";
import { ButtonLink } from "../ui/primitives";
import { BrandLogo } from "../brand/logo";

export function HeroSection() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 18 });
  const glowX = useTransform(springX, (value) => `${value}px`);
  const glowY = useTransform(springY, (value) => `${value}px`);

  return (
    <section className="hero" id="top" onPointerMove={(event) => {
      if (!reduceMotion) {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }
    }}>
      <motion.div className="hero-glow" style={{ left: glowX, top: glowY }} />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-content shell">
        <Reveal className="hero-brand"><BrandLogo /></Reveal>
        <Reveal className="hero-status">
          <span className="availability-dot" /> {t.hero.status}
          <span className="hero-location"><MapPin size={13} /> {t.hero.location}</span>
        </Reveal>
        <div className="hero-main">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.title}
            <span className="outline-text">{t.hero.outline}</span>
          </motion.h1>
          <Reveal className="hero-intro" delay={0.25}>
            <p>{t.hero.intro}</p>
            <div className="hero-cta">
              <ButtonLink href="#projects">{t.hero.primary} <ArrowRight size={17} /></ButtonLink>
              <ButtonLink href="#contact" variant="ghost">{t.hero.secondary} <ArrowRight size={16} /></ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="hero-foot">
          <span>{t.hero.scroll}</span>
          <div className="hero-foot-line" />
          <span>© 2026 / T—RAMOS DEV</span>
        </div>
      </div>
    </section>
  );
}
