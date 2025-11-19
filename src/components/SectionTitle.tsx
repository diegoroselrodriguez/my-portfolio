// src/components/SectionTitle.tsx

type SectionTitleProps = {
  id?: string;
  overline: string;
  title: string;
};

export default function SectionTitle({ id, overline, title }: SectionTitleProps) {
  return (
    <div className="section-title" id={id}>
      <p className="overline">{overline}</p>
      <h3>{title}</h3>
    </div>
  );
}
