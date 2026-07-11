import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ExternalLink, Eye } from "lucide-react";
import { Github } from "@/components/ui/icons";

export const metadata = {
  title: "Projects Archive - Nahid Pervej Ruhan",
  description: "A complete list of the things I've built, ranging from full-stack e-commerce platforms to AI-powered web applications.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="size-4" /> Back to Portfolio
        </Link>

        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {"// all projects"}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects Archive</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A complete list of the things I&apos;ve built, ranging from full-stack e-commerce platforms to AI-powered web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, index) => (
            <article
              key={p.name}
              className="glass card-hover rounded-3xl flex flex-col group relative hover:z-100"
            >
              <div className="relative w-full shrink-0 group/img">
                <div className="relative h-48 sm:h-52 w-full bg-muted/20 overflow-hidden rounded-t-3xl">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 glass bg-background/90 rounded-full px-3 py-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider z-10">
                    {p.type}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2 leading-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2"
                    >
                      <ExternalLink className="size-3 sm:size-4" /> LIVE
                    </a>
                  ) : (
                    <div className="btn-primary rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 opacity-50 cursor-not-allowed">
                      <ExternalLink className="size-3 sm:size-4" /> LIVE
                    </div>
                  )}
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:bg-white/5 transition-colors border border-border/50"
                    >
                      <Github className="size-3 sm:size-4" /> SOURCE
                    </a>
                  ) : (
                    <div className="glass rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 opacity-50 cursor-not-allowed border border-border/50">
                      <Github className="size-3 sm:size-4" /> SOURCE
                    </div>
                  )}
                  <Link
                    href={`/projects/${p.id}`}
                    className="glass rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:bg-white/5 transition-colors border border-border/50"
                  >
                    <Eye className="size-3 sm:size-4" /> DETAIL
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
