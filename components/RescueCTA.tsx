import Link from "next/link";

interface RescueCTAProps {
  name: string;
  slug: string;
}

export default function RescueCTA({ name, slug }: RescueCTAProps) {
  return (
    <section className="bg-primary w-full py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Make {name}&apos;s Story Complete
        </h2>
        <p className="text-slate-700 text-lg max-w-xl mx-auto mb-10">
          Every rescue has a cost, but every recovery is priceless. Help us write the next chapter of{" "}
          <strong>{name}&apos;s</strong> life or support our next mission.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={`/adopt?animal=${slug}`}
            className="bg-black text-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Adopt {name}
          </Link>
          <Link
            href="/donate"
            className="bg-white/20 border-2 border-black text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-black hover:text-primary transition-colors"
          >
            Donate to Future Rescues
          </Link>
        </div>
      </div>
    </section>
  );
}
