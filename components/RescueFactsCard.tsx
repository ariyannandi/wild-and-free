interface RescueFactsCardProps {
  name: string;
  status: string;
  rescueDate: string;
  location: string;
  species: string;
  breed: string;
  slug: string;
}

export default function RescueFactsCard({ name, status, rescueDate, location, species, breed, slug }: RescueFactsCardProps) {
  const statusColor =
    status === "Recovered & Healthy"
      ? "text-emerald-600 bg-emerald-50"
      : status === "In Treatment"
        ? "text-blue-600 bg-blue-50"
        : "text-amber-600 bg-amber-50";

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5 sticky top-28">
      <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <span className="text-primary">●</span> Key Facts
      </h2>

      <div className="space-y-4 text-sm">
        <FactRow label="Status">
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor}`}>{status}</span>
        </FactRow>
        <FactRow label="Rescue Date">{rescueDate}</FactRow>
        <FactRow label="Location">{location}</FactRow>
        <FactRow label="Species">{species}</FactRow>
        <FactRow label="Breed">{breed}</FactRow>
      </div>

      <a
        href={`/adopt?animal=${slug}`}
        className="block w-full text-center bg-black text-primary font-black py-3 rounded-xl hover:bg-slate-800 transition-colors uppercase tracking-widest text-sm"
      >
        Share Her Story
      </a>
    </div>
  );
}

function FactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="font-semibold text-slate-900">{children}</span>
    </div>
  );
}
