type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moss dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
