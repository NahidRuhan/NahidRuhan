import { SOCIAL_LINKS } from "./constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Nahid Pervej Ruhan. Crafted with care in
          Dhaka.
        </p>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.id} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-foreground transition-colors" aria-label={link.label}>
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
