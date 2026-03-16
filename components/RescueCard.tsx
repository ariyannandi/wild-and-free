import Image from "next/image";
import Link from "next/link";

interface RescueCardProps {
  id?: string;
  name: string;
  date: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function RescueCard({ id, name, date, description, imageUrl, imageAlt }: RescueCardProps) {
  return (
    <div className="group bg-black rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative">
        <Image
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          alt={imageAlt}
          src={imageUrl}
          fill
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{date}</span>
        <h3 className="text-xl text-white mt-1">{name}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={id ? `/rescues/${id}` : "/rescues"} className="block text-white text-center w-full py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm hover:bg-primary hover:border-primary hover:text-black transition-all">
            Read Story
          </Link>
        </div>
      </div>
    </div>
  );
}
