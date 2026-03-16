interface Stat {
  value: string;
  label: string;
}

interface SuccessStatsProps {
  stats: Stat[];
}

export default function SuccessStats({ stats }: SuccessStatsProps) {
  return (
    <div className="bg-secondary border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 px-4 text-center">
              <p className="text-3xl font-black text-primary">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
