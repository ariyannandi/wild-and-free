import { Zap, Users, ShieldCheck, Home } from "lucide-react";

interface AnimalQuickFactsCardProps {
  energyLevel: string;
  goodWithKids: string;
  health: string;
  houseTrained: string;
  adoptionFee: string;
}

export default function AnimalQuickFactsCard({
  energyLevel,
  goodWithKids,
  health,
  houseTrained,
  adoptionFee,
}: AnimalQuickFactsCardProps) {
  return (
    <div className="bg-black text-white p-8 rounded-xl shadow-2xl relative overflow-hidden group">
      <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
        <span className="material-symbols-outlined text-[12rem] text-primary">pets</span>
      </div>
      <h4 className="text-2xl font-black mb-8 text-primary uppercase tracking-tighter italic">Quick Facts</h4>
      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Zap className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/40 font-black tracking-[0.2em]">Energy Level</p>
            <p className="font-bold text-white">{energyLevel}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Users className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/40 font-black tracking-[0.2em]">Good with Kids</p>
            <p className="font-bold text-white">{goodWithKids}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <ShieldCheck className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/40 font-black tracking-[0.2em]">Health Status</p>
            <p className="font-bold text-white">{health}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Home className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase text-white/40 font-black tracking-[0.2em]">Living Style</p>
            <p className="font-bold text-white">{houseTrained}</p>
          </div>
        </div>
        
        <div className="pt-4">
          <a 
            className="block w-full bg-primary text-black text-center py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20" 
            href="#adoption-form"
          >
            Apply to Adopt
          </a>
          <p className="text-center text-[10px] uppercase font-black tracking-widest text-primary/40 mt-4">
            Adoption Fee: {adoptionFee}
          </p>
        </div>
      </div>
    </div>
  );
}
