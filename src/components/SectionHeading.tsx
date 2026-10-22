interface SectionHeadingProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, tag, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-12 md:mb-16">
      <p className="label flex items-center gap-4">
        <span>{index}</span>
        <span className="h-px w-12 bg-current" aria-hidden="true" />
        <span>{tag}</span>
      </p>
      <h2 className="type-display mt-6 max-w-[18ch] text-balance">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-75">{subtitle}</p>}
    </header>
  );
}
