import Image from "next/image";

interface FamilyQuoteSectionProps {
  quote: string;
  animalName: string;
  familyName: string;
  familyAvatarUrl?: string;
}

export default function FamilyQuoteSection({
  quote,
  animalName,
  familyName,
  familyAvatarUrl,
}: FamilyQuoteSectionProps) {
  return (
    <section className="bg-black py-20 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-primary text-2xl">★</span>
          ))}
        </div>

        <blockquote className="text-white text-2xl md:text-3xl font-bold italic leading-relaxed mb-10 max-w-3xl mx-auto">
          &ldquo;{quote.replace("[name]", animalName)}&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          {familyAvatarUrl ? (
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary">
              <Image className="object-cover" alt={familyName} src={familyAvatarUrl} fill />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-black text-black text-xl">
              {familyName.charAt(0)}
            </div>
          )}
          <div className="text-left">
            <p className="text-white font-bold">{familyName}</p>
            <p className="text-primary text-xs font-bold uppercase tracking-widest">{animalName}&apos;s Forever Family</p>
          </div>
        </div>
      </div>
    </section>
  );
}
