import Image from "next/image";

interface Section {
  heading: string;
  body: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface RescueStoryContentProps {
  lead: string;
  quote: string;
  quoteAuthor: string;
  sections: Section[];
}

export default function RescueStoryContent({ lead, quote, quoteAuthor, sections }: RescueStoryContentProps) {
  return (
    <article className="space-y-10 text-slate-700 leading-relaxed">
      {/* Lead paragraph */}
      <p className="text-xl font-medium border-l-4 border-primary pl-6 text-slate-800">{lead}</p>

      {/* Pull quote */}
      <blockquote className="bg-black text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
        <span className="absolute -top-6 -left-2 text-primary/20 font-black text-[120px] leading-none select-none">"</span>
        <p className="text-xl md:text-2xl font-bold italic relative z-10">"{quote}"</p>
        <footer className="mt-4 text-primary font-bold">— {quoteAuthor}</footer>
      </blockquote>

      {sections.map((section, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">{section.heading}</h2>
          <p>{section.body}</p>
          {section.imageUrl && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
              <Image className="object-cover" alt={section.imageAlt ?? section.heading} src={section.imageUrl} fill />
            </div>
          )}
        </div>
      ))}
    </article>
  );
}
