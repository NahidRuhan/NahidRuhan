import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="text-foreground/80 leading-relaxed space-y-4 text-lg">
              <p>
                My journey began with C/C++ in competitive programming, which taught me how to think algorithmically. I soon transitioned into web development, falling in love with the ability to build scalable, full-stack platforms from scratch.
              </p>
              <p>
                I thrive on architecting products that solve real-world problems and drive revenue. Whether it&apos;s designing secure REST APIs or optimizing a Next.js frontend, I enjoy taking ownership of the entire product lifecycle.
              </p>
              <p>
                Outside of IDEs and terminal windows, I enjoy exploring new technologies, playing sports, and painting. I&apos;m also deeply passionate about teaching—having mentored over 47 students, I find joy in breaking down complex concepts for the next generation of developers.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 py-1 my-2">
              <p className="font-mono text-sm md:text-base italic text-primary">
                &quot;To code, or not to code, Leave it to claude&quot;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-3 mt-2">
              {["FRONTEND", "BACKEND", "FULL STACK"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono border border-border rounded-md text-muted-foreground bg-background/50 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-16">
            {[
              {
                id: "01",
                icon: Code2,
                title: "Clean Code",
                desc: "Maintainable, scalable architecture following industry standards.",
              },
              {
                id: "02",
                icon: Rocket,
                title: "Performance",
                desc: "Optimized for speed, Core Web Vitals, and scale.",
              },
              {
                id: "03",
                icon: Users,
                title: "Collaboration",
                desc: "Team player focused on shared goals and clear communication.",
              },
              {
                id: "04",
                icon: Lightbulb,
                title: "Innovation",
                desc: "Modern stacks applied to real-world business problems.",
              },
            ].map((card) => (
              <div
                key={card.id}
                className="relative glass card-hover rounded-2xl p-6 lg:p-8 overflow-hidden group"
              >
                <div className="absolute top-2 right-4 font-display font-bold text-7xl opacity-5 text-foreground transition-opacity group-hover:opacity-10 select-none">
                  {card.id}
                </div>

                <div className="relative z-10">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <card.icon className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
