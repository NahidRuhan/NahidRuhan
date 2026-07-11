import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "./constants";

export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="// stack"
          title="Tools I reach for."
          subtitle="The technologies I use day-to-day to design, build and ship full-stack products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((g) => (
            <div key={g.title} className="glass card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <g.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i.name}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted-foreground"
                  >
                    {i.slug ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`https://cdn.simpleicons.org/${i.slug}${i.whiteIcon ? '/white' : ''}`}
                        alt=""
                        width={12}
                        height={12}
                        className="size-3"
                      />
                    ) : i.customImg ? (
                      <Image
                        src={i.customImg}
                        alt=""
                        width={12}
                        height={12}
                        className="size-3 object-contain rounded-sm"
                      />
                    ) : (
                      <g.icon className="size-3" />
                    )}
                    {i.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
