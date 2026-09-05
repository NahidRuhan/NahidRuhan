"use client";

import { useActionState, useEffect, useRef } from "react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/actions/contact";
import { toast } from "sonner";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section id="contact" className="py-16 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-center h-full">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {"// let's build"}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              I&apos;m currently open to full-stack roles, freelance builds and
              technical mentoring engagements. Feel free to reach out via the form, or drop me an email directly.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:nahidpervejruhan@gmail.com" className="group flex items-center gap-5 w-fit">
                <div className="size-14 rounded-2xl glass flex items-center justify-center text-foreground/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-medium text-foreground/90 group-hover:text-primary transition-colors">nahidpervejruhan@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+8801886349919" className="group flex items-center gap-5 w-fit">
                <div className="size-14 rounded-2xl glass flex items-center justify-center text-foreground/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-medium text-foreground/90 group-hover:text-primary transition-colors">+880 1886-349919</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="glass rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-center h-full shadow-lg">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none" />
            
            <form 
              ref={formRef}
              action={formAction} 
              className="relative space-y-6 my-auto"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider pl-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    disabled={isPending}
                    className="w-full bg-background/30 border border-border/50 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-primary/50 focus:bg-background/60 transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider pl-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={isPending}
                    className="w-full bg-background/30 border border-border/50 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-primary/50 focus:bg-background/60 transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider pl-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  disabled={isPending}
                  rows={5}
                  className="w-full bg-background/30 border border-border/50 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-primary/50 focus:bg-background/60 transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full btn-primary rounded-2xl py-4 text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
