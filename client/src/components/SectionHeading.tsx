/*
 * Blueprint Precision Design System
 * - Section numbers in IBM Plex Mono, teal accent
 * - Instrument Serif for headings
 * - Thin ruled line separator
 * - Left margin numbering like technical documentation
 */

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ number, title, subtitle, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-xs font-medium tracking-widest text-teal uppercase">
          {number}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
