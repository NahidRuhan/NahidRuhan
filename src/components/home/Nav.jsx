"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "./constants";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Add 'education' to the sections we check, even though it's not directly in NAV_LINKS
      const sections = [...NAV_LINKS.map(link => link.href.replace('#', '')), 'education'];
      let current = "";
      
      // If we are at the bottom of the page, contact is active
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = "contact";
      } else {
        // Use a threshold 1/3 down the screen to determine active section
        const threshold = window.innerHeight / 3;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
              current = section;
              break;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="glass rounded-full flex items-center justify-between px-5 py-3">
          <Link href="#top" className="font-display font-bold text-base tracking-tight">
            NR<span className="text-gradient">.</span>
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => {
              const linkSection = l.href.replace('#', '');
              // Map both 'experience' and 'education' to the 'experience' link
              const isActive = activeSection === linkSection || (linkSection === 'experience' && activeSection === 'education');
              
              return (
                <li key={l.href}>
                  <Link 
                    href={l.href} 
                    className={`transition-colors hover:text-foreground ${
                      isActive ? "text-foreground underline decoration-2 underline-offset-4 decoration-[oklch(0.82_0.16_75)]" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="mailto:nahidpervejruhan@gmail.com"
            className="btn-primary rounded-full px-4 py-2 text-sm font-medium"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
