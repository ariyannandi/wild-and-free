"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface AdoptionListingCardProps {
  id?: string;
  name: string;
  breed: string;
  age: string;
  gender: "Male" | "Female";
  location: string;
  status?: "Active" | "New" | string;
  imageUrl: string;
  imageAlt: string;
}

export default function AdoptionListingCard({
  id,
  name,
  breed,
  age,
  gender,
  location,
  status,
  imageUrl,
  imageAlt,
}: AdoptionListingCardProps) {
  const [favourited, setFavourited] = useState(false);

  return (
    <div className="bg-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full font-display">
      <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
        <Image className="object-cover" alt={imageAlt} src={imageUrl} fill />
        <button
          onClick={() => setFavourited((prev) => !prev)}
          className="absolute top-3 right-3 p-2 cursor-pointer rounded-full transition-colors z-10"
        >
          <Heart
            size={18}
            className="transition-colors"
            fill={favourited ? "#ef4444" : "white"}
            stroke={favourited ? "#ef4444" : "white"}
          />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-white font-bold">{name}</h3>
          {status && (
            <span
              className={cn(
                "px-2 py-0.5 text-xs font-bold rounded",
                status.toLowerCase() === "active"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : status.toLowerCase() === "new"
                    ? "bg-primary/20 text-black dark:text-primary"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              )}
            >
              {status}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{breed}</p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-500 mb-4 flex-grow">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{age}</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{gender.toLowerCase()}</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{location}</span>
          </span>
        </div>

        <Link
          href={id ? `/adopt/${id.toLowerCase()}` : "/adopt"}
          className="mt-auto w-full py-2.5 bg-primary font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 text-black"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}