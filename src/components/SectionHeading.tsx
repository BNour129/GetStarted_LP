interface SectionHeadingProps {
  label: string;
  title: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ label, title, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`space-y-2 ${alignClass}`}> 
      <span className="uppercase text-primary tracking-wider text-sm font-semibold">{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold font-poppins">{title}</h2>
    </div>
  );
}
