"use client";

import { useEffect, useState } from "react";
import { Command, Home, Linkedin, Mail, Search, UserRound, X } from "lucide-react";
import { useLocale } from "./locale-context";
import { officialLinks } from "@/data/i18n";

export function CommandPalette() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = [
    { label: t.chrome.home, href: "#top", icon: Home },
    ...t.nav.map((item) => ({ ...item, icon: UserRound })),
    { label: t.chrome.email, href: `mailto:${officialLinks.email}`, icon: Mail },
    { label: "LinkedIn", href: officialLinks.linkedin, icon: Linkedin },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button className="command-trigger" onClick={() => setOpen(true)} aria-label={t.chrome.openPalette}>
        <Command size={15} /><span>{t.chrome.quickNav}</span><kbd>⌘ K</kbd>
      </button>
      {open && (
        <div className="palette-backdrop" onMouseDown={() => setOpen(false)} role="presentation">
          <div className="palette" role="dialog" aria-modal="true" aria-label={t.chrome.openPalette} onMouseDown={(e) => e.stopPropagation()}>
            <div className="palette-search">
              <Search size={18} aria-hidden="true" />
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.chrome.palettePlaceholder} aria-label={t.chrome.palettePlaceholder} />
              <button onClick={() => setOpen(false)} aria-label={t.chrome.closePalette}><X size={17} /></button>
            </div>
            <div className="palette-list">
              <small>{t.chrome.navigate}</small>
              {items.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  <Icon size={17} /><span>{label}</span><span className="palette-enter">↵</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
