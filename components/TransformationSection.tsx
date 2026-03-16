import Image from "next/image";

interface TransformationSectionProps {
  title?: string;
  beforeImageUrl: string;
  beforeImageAlt: string;
  beforeCaption: string;
  afterImageUrl: string;
  afterImageAlt: string;
  afterCaption: string;
}

export default function TransformationSection({
  title = "The Transformation",
  beforeImageUrl,
  beforeImageAlt,
  beforeCaption,
  afterImageUrl,
  afterImageAlt,
  afterCaption,
}: TransformationSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="space-y-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image className="object-cover" alt={beforeImageAlt} src={beforeImageUrl} fill />
            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Before
            </span>
          </div>
          <p className="text-sm text-slate-500 text-center leading-relaxed">{beforeCaption}</p>
        </div>
        {/* After */}
        <div className="space-y-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-4 ring-primary">
            <Image className="object-cover" alt={afterImageAlt} src={afterImageUrl} fill />
            <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              After
            </span>
          </div>
          <p className="text-sm text-slate-500 text-center leading-relaxed">{afterCaption}</p>
        </div>
      </div>
    </section>
  );
}
