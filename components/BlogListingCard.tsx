import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogListingCardProps {
  id?: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  slug?: string;
}

export default function BlogListingCard({
  category,
  date,
  title,
  excerpt,
  imageUrl,
  imageAlt,
  slug
}: BlogListingCardProps) {
  return (
    <article className="group bg-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-800 font-display">
      <div className="aspect-[16/10] overflow-hidden relative cursor-pointer">
        <Image
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          alt={imageAlt}
          src={imageUrl}
          fill
        />
        <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase z-10">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-semibold uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">{date}</span>

        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {excerpt}
        </p>
        <Link
          href={slug ? `/blog/${slug}` : "/blog"}
          className="flex items-center gap-2 text-black dark:text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary w-fit pb-1 group-hover:gap-4 transition-all"
        >
          Read Full Story <span className="material-symbols-outlined text-sm"><ArrowRight /></span>
        </Link>
      </div>
    </article>
  );
}
