import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
}

export default function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  const isUp = trend === 'up';
  return (
    <div className="p-8 rounded-[40px] bg-white border border-secondary/10 shadow-sm font-display relative overflow-hidden group hover:border-primary transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="text-secondary/60 group-hover:text-secondary transition-colors" size={24} />
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black ${isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {isUp ? '+' : ''}{change}
        </div>
      </div>
      <div>
        <p className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</p>
        <p className="text-4xl font-black text-secondary tracking-tight">{value}</p>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 pointer-events-none"></div>
    </div>
  );
}
