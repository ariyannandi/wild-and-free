import Image from "next/image";
import Link from "next/link";

interface AnimalCardProps {
  id?: string;
  name: string;
  type: "DOG" | "CAT" | "OTHER";
  breed: string;
  age: string;
  imageUrl: string;
  imageAlt: string;
}

export default function AnimalCard({ id, name, type, breed, age, imageUrl, imageAlt }: AnimalCardProps) {
  return (
    <div className="bg-white dark:bg-black rounded-xl p-4 shadow-lg border border-primary/20 flex flex-col h-full">
      <div className="relative w-full h-72 rounded-xl mb-4 overflow-hidden">
        <Image
          className="object-cover"
          alt={imageAlt}
          src={imageUrl}
          fill
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-white">{name}</h3>
        <span className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded">{type}</span>
      </div>
      <div className="flex gap-4 text-xs text-slate-500 mb-6 flex-grow">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">{breed}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">{age}</span>
        </span>
      </div>
      <Link href={id ? `/adopt/${id.toLowerCase()}` : "/adopt"} className="block text-center w-full bg-black dark:bg-primary dark:text-black text-white py-3 rounded-xl font-bold hover:bg-primary hover:text-black transition-all mt-auto">
        View Details
      </Link>
    </div>
  );
}
