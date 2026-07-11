export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl mb-12">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
