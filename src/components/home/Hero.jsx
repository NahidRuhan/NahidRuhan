import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "./constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <Image
        src="/hero-bg.jpg"
        alt=""
        aria-hidden
        width={1600}
        height={1200}
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-25 mask-[linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Nahid Pervej <span className="text-gradient">Ruhan</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A <span className="text-foreground font-medium">Full-Stack Engineer</span> building scalable, revenue-generating platforms with Next.js and the MERN stack. I specialize in secure API design, complex databases, and mentoring the next generation of developers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                View my work <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="/Nahid_Pervej_Ruhan_Fullstack_Developer_Resume.pdf"
                download="Nahid_Pervej_Ruhan_Fullstack_Developer_Resume.pdf"
                className="glass rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:border-primary/40 transition-colors"
              >
                Download Resume <Download className="size-4" />
              </a>
              <Link
                href="#contact"
                className="glass rounded-full px-6 py-3 text-sm font-semibold hover:border-primary/40 transition-colors"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.id} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="hover:text-foreground transition-colors" aria-label={link.label}>
                  <link.icon className="size-5" />
                </a>
              ))}
              <span className="inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4" /> Dhaka, BD
              </span>
            </div>
          </div>
          <div className="relative justify-self-center md:justify-self-end">
            <div className="absolute -inset-6 bg-linear-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full" />
            <div className="relative glass rounded-3xl p-3 shadow-card">
              <Image
                src="/profile-pic.png"
                alt="Nahid Pervej Ruhan"
                width={320}
                height={320}
                className="rounded-2xl size-72 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs">
                <div className="font-mono text-secondary">~ uptime</div>
                <div className="font-display font-bold text-lg">3+ years</div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs">
                <div className="font-mono text-primary">~ ships</div>
                <div className="font-display font-bold text-lg">10+ projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
