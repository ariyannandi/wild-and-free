import Link from "next/link";

export default function SuccessCTA() {
  return (
    <section className="bg-primary py-20 w-full">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Be the Next<br />Success Story
        </h2>
        <p className="text-black/70 text-lg max-w-xl mx-auto mb-10">
          There are hundreds of animals like Luna still waiting for their forever home. Start your &ldquo;forever&rdquo; tale today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/adopt"
            className="bg-black text-primary px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors"
          >
            View Adoptable Pets
          </Link>
          <Link
            href="/donate"
            className="bg-white/20 border-2 border-black/30 text-black px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm hover:bg-black hover:text-primary transition-colors"
          >
            Sponsor a Rescue
          </Link>
        </div>
      </div>
    </section>
  );
}
