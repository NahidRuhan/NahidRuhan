import { Building2, Calendar } from "lucide-react";
import { EDUCATION } from "./constants";

export default function Education() {
  return (
    <section id="education" className="py-16 scroll-mt-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <div className="size-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
            <Building2 className="size-6" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-1">
              Education
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Academic background and core foundations.
            </p>
          </div>
        </div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-4 space-y-10 pb-4">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="glass rounded-3xl p-6 md:p-8 card-hover border border-border/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">{edu.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                        <Building2 className="size-3.5 inline-block mr-1.5 -mt-0.5" />
                        {edu.company}
                      </span>
                      {edu.gpa && (
                        <span className="text-muted-foreground font-mono text-xs border border-border/50 bg-background/50 px-2 py-0.5 rounded-md">
                          GPA <strong className="text-primary ml-1">{edu.gpa}</strong>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/50 border border-border px-3 py-1.5 rounded-full">
                      <Calendar className="size-3.5" /> {edu.period}
                    </div>
                    {edu.current ? (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                        <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        EXPECTED
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/20 border border-border/50 px-3 py-1.5 rounded-full">
                        COMPLETED
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed mb-6">
                  {edu.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {edu.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md bg-background border border-border text-muted-foreground uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
