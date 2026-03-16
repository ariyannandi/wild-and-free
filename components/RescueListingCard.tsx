"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface RescueListingCardProps {
  id?: string;
  name: string;
  breed: string;
  date: string;
  status: string;
  statusColor?: "primary" | "blue" | "amber" | string;
  imageUrl: string;
  imageAlt: string;
}

export default function RescueListingCard({
  id,
  name,
  breed,
  date,
  status,
  statusColor = "primary",
  imageUrl,
  imageAlt,
}: RescueListingCardProps) {
  const [favourited, setFavourited] = useState(false);

  const getStatusStyle = () => {
    switch (statusColor) {
      case "primary": return "bg-primary text-slate-900";
      case "blue": return "bg-blue-500 text-white";
      case "amber": return "bg-amber-500 text-white";
      default: return "bg-primary text-slate-900";
    }
  };

  return (
    <div className="group bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col font-display">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
        <Image
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          alt={imageAlt}
          src={imageUrl}
          fill
        />
        <div className="absolute top-4 left-4 z-10">
          <span className={cn(
            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
            getStatusStyle()
          )}>
            {status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-2xl font-bold text-white">{name}</h4>
          <button
            onClick={() => setFavourited((prev) => !prev)}
            className="transition-colors cursor-pointer"
            aria-label={favourited ? "Remove from favourites" : "Add to favourites"}
          >
            <Heart
              size={20}
              className="transition-colors"
              fill={favourited ? "#ef4444" : "transparent"}
              stroke={favourited ? "#ef4444" : "#94a3b8"}
            />
          </button>
        </div>

        <p className="text-slate-500 font-medium mb-1">{breed}</p>
        <p className="text-slate-400 text-sm mb-6 flex items-center gap-1 flex-grow">
          {date}
        </p>

        <Link
          href={id ? `/rescues/${id}` : "/rescues"}
          className="block text-center w-full py-3 bg-black text-white border border-primary rounded-xl font-bold hover:bg-primary hover:text-secondary transition-colors mt-auto"
        >
          Read Story
        </Link>
      </div>
    </div>
  );
}