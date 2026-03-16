import Image from "next/image";
import Link from "next/link";

interface SuccessHeroProps {
  name: string;
  heroImageUrl: string;
  heroImageAlt: string;
  tagline: string;
  subtitle: string;
  adoptionDate: string;
  family: string;
  phone?: string;
}

export default function SuccessHero({
  name,
  heroImageUrl,
  heroImageAlt,
  tagline,
  subtitle,
  adoptionDate,
  family,
  phone,
}: SuccessHeroProps) {
  return (
    <section className="relative w-full min-h-[520px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image className="object-cover object-top" alt={heroImageAlt} src={heroImageUrl} fill priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <span className="inline-block bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest mb-4">
          Success Story
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-4">
          The New Life
          <br />
          of <span className="text-primary">{name}</span>
        </h1>
        <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">{subtitle}</p>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
            <span>{adoptionDate}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-primary text-sm">home</span>
            <span>{family}</span>
          </div>
          {phone && (
            <div className="flex items-center gap-2 text-white/70">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <span>{phone}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
