interface AnimalStorySectionProps {
  name: string;
  story: string[];
}

export default function AnimalStorySection({ name, story }: AnimalStorySectionProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="h-px bg-primary flex-grow"></div>
        <h3 className="text-3xl font-black uppercase tracking-tighter italic shrink-0 underline decoration-primary decoration-4 underline-offset-8">Meet {name}</h3>
        <div className="h-px bg-primary flex-grow"></div>
      </div>
      <div className="prose max-w-none text-black/70 leading-relaxed space-y-6 font-medium text-lg">
        {story.map((paragraph, index) => (
          <p key={index} className="first-letter:text-4xl first-letter:font-black first-letter:text-black first-letter:mr-1">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
