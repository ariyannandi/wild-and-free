"use client";

import { Heart, MapPin, Smile } from "lucide-react";
import { useState } from "react";

interface AnimalProfileHeaderProps {
  name: string;
  breed: string;
  age: string;
  gender: string;
  rescueDate: string;
  location: string;
  medicalStatus: string;
  behavior: string;
}

export default function AnimalProfileHeader({
  name,
  breed,
  age,
  gender,
  rescueDate,
  location,
  medicalStatus,
  behavior,
}: AnimalProfileHeaderProps) {
  const [isFavourited, setIsFavourited] = useState(false);

  return (
    <div className="border-b border-black/5 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Available for Adoption</span>
          </div>
          <h2 className="text-6xl font-black tracking-tighter text-black italic uppercase">{name}</h2>
          <p className="text-xl text-black/40 mt-1 font-bold">
            {breed} <span className="text-primary mx-2">/</span> {age} <span className="text-primary mx-2">/</span> {gender}
          </p>
        </div>
        <button 
          onClick={() => setIsFavourited(!isFavourited)}
          className={`px-8 py-4 rounded-2xl font-black transition-all shadow-xl flex items-center gap-3 cursor-pointer group ${
            isFavourited 
            ? "bg-rose-500 text-white hover:bg-rose-600 scale-105" 
            : "bg-black text-primary hover:bg-primary hover:text-black"
          }`}
        >
          <Heart size={20} fill={isFavourited ? "white" : "none"} className={isFavourited ? "animate-pulse" : "group-hover:scale-110 transition-transform"} />
          {isFavourited ? "Loved" : "Save for Later"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Breed", value: breed },
          { label: "Age", value: age },
          { label: "Gender", value: gender },
          { label: "Status", value: medicalStatus }
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 group hover:border-primary transition-all">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-black mb-1">{item.label}</p>
            <p className="font-black text-black text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-black mb-0.5">Location</p>
            <p className="font-black text-black italic">{location}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black">
            <Smile size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-black mb-0.5">Behavior</p>
            <p className="font-black text-black italic">{behavior}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
