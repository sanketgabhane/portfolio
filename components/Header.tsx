"use client";

import { useEffect, useState } from "react";

const links = [
  ["Career", "#career"],
  ["Work", "#work"],
  ["Toolbox", "#toolbox"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    // menu khula ho to background scroll band
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // desktop size par jaate hi menu band
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="container site-header__nav" aria-label="Primary">
        <a href="#top" className="logo" onClick={close}>
          Sanket Gabhane
        </a>

        <div className="site-header__links">
          {links.map(([t, h]) => (
            <a key={h} href={h}>
              {t}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn btn--outline btn--sm site-header__cta"
        >
          Hire me
        </a>

        <button
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map(([t, h]) => (
          <a key={h} href={h} onClick={close}>
            {t}
          </a>
        ))}
        <a href="#contact" className="btn btn--solid" onClick={close}>
          Hire me
        </a>
      </div>
    </header>
  );
}
