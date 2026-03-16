import { Map } from "lucide-react";

interface LocationCardProps {
  locationText: string;
}

export default function LocationCard({ locationText }: LocationCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-black/5 shadow-sm group hover:border-black transition-all">
      <div className="w-full aspect-video rounded-xl bg-black/5 flex items-center justify-center mb-5 relative overflow-hidden">
        <Map size={48} className="text-black/10 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 border-2 border-black/5 rounded-xl pointer-events-none"></div>
      </div>
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-black mb-1">Current Shelter</p>
        <p className="text-sm font-black text-black italic">
          Safe in {locationText}
        </p>
      </div>
    </div>
  );
}
