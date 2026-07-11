import Link from "next/link";
import { NAV_LINKS } from "./constants";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="glass rounded-full flex items-center justify-between px-5 py-3">
          <Link href="#top" className="font-display font-bold text-base tracking-tight">
            NR<span className="text-gradient">.</span>
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
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
