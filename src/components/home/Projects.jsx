import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Eye } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { PROJECTS } from "@/data/projects";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="// selected work"
          title="Projects that ship."
          subtitle="A snapshot of products I've designed, built and shipped — from commercial e-commerce to typed REST APIs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 9).map((p, index) => (
            <article
              key={p.name}
              className="glass card-hover rounded-3xl flex flex-col group relative hover:z-100"
            >
              <div className="relative w-full shrink-0 group/img">
                <div className="relative h-48 sm:h-52 w-full bg-muted/20 overflow-hidden rounded-t-3xl">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={index < 2} className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                  
                  <div className="absolute bottom-4 left-4 glass bg-background/90 rounded-full px-3 py-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider z-10">
                    {p.type}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2 leading-tight">{p.name}</h3>
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
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2">
                      <ExternalLink className="size-3 sm:size-4" /> LIVE
                    </a>
                  ) : (
                    <div className="btn-primary rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 opacity-50 cursor-not-allowed">
                      <ExternalLink className="size-3 sm:size-4" /> LIVE
                    </div>
                  )}
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer" className="glass rounded-xl py-2.5 px-2 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:bg-white/5 transition-colors border border-border/50">
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
        
        {PROJECTS.length > 9 && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="btn-primary rounded-full px-8 py-3 text-sm font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              See More Projects <ExternalLink className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
