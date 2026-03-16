import { ShieldAlert } from "lucide-react";

interface AdoptionRequirementsProps {
  requirements: string[];
}

export default function AdoptionRequirements({ requirements }: AdoptionRequirementsProps) {
  return (
    <div className="bg-black text-white p-10 rounded-[40px] border-4 border-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black">
          <ShieldAlert size={28} strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter italic">Adoption Checklist</h3>
      </div>
      
      <ul className="space-y-6">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-5 group">
            <div className="mt-1.5 size-2 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 group-hover:scale-125 transition-transform"></div>
            <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">{req}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-10 pt-10 border-t border-white/10">
        <p className="text-primary text-sm font-black italic uppercase tracking-widest">Please read carefully before applying.</p>
      </div>
    </div>
  );
}
