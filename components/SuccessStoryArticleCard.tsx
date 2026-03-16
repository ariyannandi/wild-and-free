import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';


interface SuccessStoryArticleCardProps {
  id?: string;
  title: string;
  date: string;
  author: string;
  storyParagraphs: string[];
  beforeImageUrl: string;
  beforeImageAlt: string;
  afterImageUrl: string;
  afterImageAlt: string;
  reverse?: boolean;
}

export default function SuccessStoryArticleCard({
  id,
  title,
  date,
  author,
  storyParagraphs,
  beforeImageUrl,
  beforeImageAlt,
  afterImageUrl,
  afterImageAlt,
  reverse = false
}: SuccessStoryArticleCardProps) {
  return (
    <article className={cn(
      "bg-secondary rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col font-display",
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    )}>
      <div className="lg:w-1/2 flex flex-col sm:flex-row p-4 gap-4 bg-secondary">
        <div className="flex-1 relative group overflow-hidden rounded-2xl aspect-square lg:aspect-auto lg:h-full">
          <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</div>
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={beforeImageAlt}
            src={beforeImageUrl}
            fill
          />
        </div>
        <div className="flex-1 relative group overflow-hidden rounded-2xl aspect-square lg:aspect-auto lg:h-full">
          <div className="absolute top-3 left-3 z-10 bg-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/30 text-black">AFTER</div>
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={afterImageAlt}
            src={afterImageUrl}
            fill
          />
        </div>
      </div>

      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm tracking-wider uppercase">
          <span>{date}</span>
        </div>

        <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-1">{title}</h2>
        <p className="text-primary font-semibold mb-6 italic">Adopted by {author}</p>

        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {storyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <Link
            href={id ? `/success-stories/${id}` : "/success-stories"}
            className="bg-primary hover:bg-primary/90 font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group text-black w-fit"
          >
            Read Full Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
