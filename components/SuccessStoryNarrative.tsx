interface SuccessStoryNarrativeProps {
  sectionTitle: string;
  paragraphs: string[];
}

export default function SuccessStoryNarrative({ sectionTitle, paragraphs }: SuccessStoryNarrativeProps) {
  const [first, ...rest] = paragraphs;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-8">{sectionTitle}</h2>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed text-[17px]">
        {/* Drop cap on first paragraph */}
        <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-primary">
          {first}
        </p>
        {rest.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
