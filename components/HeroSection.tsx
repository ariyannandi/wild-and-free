import Link from 'next/link'

export default function HeroSection() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="relative p-4 rounded-3xl overflow-hidden min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            title="Close up portrait of a rescued dog looking hopeful"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYGExaQ6lDpIOiUWnNDvuZvCi_H9TwTjCH9hkWAP0szS2UunYxWlva9VBFv1RfG2B2q5SCxX_TSlZ7MmhpT83oW-DfhrJ3fRBAzRBZd5Y5oyWrY3-YZDH62n487rUEfSgFbC9bZJSgKuy8GuiBbP0b2mMV25CN6Due9NCTur7K3THmNmv8k5rDlL2NiqTlh3nJoI5HAh6DyRIY8CvVfB_WVGaheE_nK8dweiEmoP-4P_O3PfQj5TffmKxGYssTp6AFr-OoLGAQQCBU')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl px-8 md:px-16 text-white">
            <h1 className="text-6xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
              Every Animal Deserves a <span className="text-primary italic">Second Chance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
              Our mission is to rescue, rehabilitate, and rehome animals in need, providing them with the love and care they deserve through community action and compassion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/adopt" className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors inline-block">
                Adopt Now
              </Link>
              <Link href="/volunteer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-colors inline-block">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
