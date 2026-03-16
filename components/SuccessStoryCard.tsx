import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SuccessStoryCardProps {
  id?: string;
  title: string;
  quote: string;
  author: string;
  beforeImageUrl: string;
  beforeImageAlt: string;
  afterImageUrl: string;
  afterImageAlt: string;
}

export default function SuccessStoryCard({
  title,
  quote,
  author,
  beforeImageUrl,
  beforeImageAlt,
  afterImageUrl,
  afterImageAlt
}: SuccessStoryCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-black rounded-3xl overflow-hidden p-8 md:p-12 text-white">
      <div className="flex-1 grid grid-cols-2 gap-4 w-full">
        <div className="relative">
          <div className="relative w-full h-64 rounded-xl overflow-hidden border-2 border-white/10">
            <Image
              className="object-cover"
              alt={beforeImageAlt}
              src={beforeImageUrl}
              fill
            />
          </div>
          <span className="absolute top-2 left-2 bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded uppercase">Before</span>
        </div>
        <div className="relative">
          <div className="relative w-full h-64 rounded-xl overflow-hidden border-2 border-primary">
            <Image
              className="object-cover"
              alt={afterImageAlt}
              src={afterImageUrl}
              fill
            />
          </div>
          <span className="absolute top-2 left-2 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded uppercase">After</span>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 text-primary">
          <span className="font-bold uppercase tracking-widest text-sm">Story of the month</span>
        </div>
        <h3 className="text-4xl font-black tracking-tight">{title}</h3>
        <p className="text-slate-400 leading-relaxed italic">
          "{quote}"
        </p>
        <p className="text-sm font-bold">— {author}</p>
        <div className="pt-4 flex gap-2">
          <button className="p-5 cursor-pointer bg-white/10 rounded-full hover:bg-primary hover:text-black transition-all">
            <span className="material-symbols-outlined"><ChevronLeft /></span>
          </button>
          <button className="p-5 cursor-pointer bg-white/10 rounded-full hover:bg-primary hover:text-black transition-all">
            <span className="material-symbols-outlined"><ChevronRight /></span>
          </button>
        </div>
      </div>
    </div>
  );
}   
