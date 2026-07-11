import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {"// let's build"}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I&apos;m currently open to full-stack roles, freelance builds and
              technical mentoring engagements. Let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:nahidpervejruhan@gmail.com"
                className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
              >
                <Mail className="size-4" /> nahidpervejruhan@gmail.com
              </a>
              <a
                href="tel:+8801886349919"
                className="glass rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:border-secondary/40 transition-colors"
              >
                <Phone className="size-4" /> +880 1886-349919
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
