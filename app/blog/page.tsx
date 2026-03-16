"use client";

import BlogListingCard from "@/components/BlogListingCard";
import Pagination from "@/components/Pagination";

export default function BlogPage() {
  return (
    <main className="font-display flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwNh0EixYZ7ZaqBVDUlEmlo4I1yL3TM5Uc_e5b6XQGvCFsEsTsuCwVZobPR8XhfEdZgcGwVOkBkKHUQQA6YSM95UFxcHlze2AyHwo6GxPWuRh6AAlIyuAoZDOJ5uF4mXHAvdJYKzvN3ZIJT6LjG8hWRBnugiMfumoqhb91RSuEvL6Srcjq3dICnC4d57QzrgbYEt6l9sER6xdFj9PEXDKhn2RlLgpe2Xdwm2n4EbLmCrDLwiJDt8ReqqV1Qm3pHh9sUOG6r9hOFiag')" }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">OUR STORIES</span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6">Rescue Tales &amp; <span className="text-primary italic">Animal Care</span></h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Heartwarming stories of survival, expert pet care advice, and updates from our global rescue missions.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-grow">
        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-full bg-black dark:bg-primary text-white dark:text-black font-bold text-sm">All Posts</button>
          <button className="px-6 py-2 rounded-full bg-secondary cursor-pointer text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-primary hover:text-black transition-all">Rescue Stories</button>
          <button className="px-6 py-2 rounded-full bg-secondary cursor-pointer text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-primary hover:text-black transition-all">Pet Care</button>
          <button className="px-6 py-2 rounded-full bg-secondary cursor-pointer text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-primary hover:text-black transition-all">NGO Updates</button>
          <button className="px-6 py-2 rounded-full bg-secondary cursor-pointer text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-primary hover:text-black transition-all">Volunteer Life</button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogListingCard
            category="Rescue Stories"
            date="Oct 12, 2023"
            title="A New Beginning for Luna"
            excerpt="Luna was found wandering the rainy streets of Portland. After three months of rehab, she's finally found her forever home."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD12biHfgIONMyiykXZfNEc5ljk63cbuODJh6ZSCQQ7pyg1vqd-af8OTPQtfG2Q8zejAI_6VMbtW5nhZF649VVRoxkRI2PaMd9lMmUo2_FjZBJiwyFdZygQZaqsikwOd71Bj46MaJucAJHOre8qXg7vRSsqep2djJnUaS4FhCfKKKyy6hc_bIC0gbAsQJXj1gSNzt0qdou4TinGRSCvDz13tt8qA2911ItRr1AXsnqAZGOzSv1Vtqr0EhQasYkVyHev1Hpz0SER2FCc"
            imageAlt="Rescue dog looking hopeful in a shelter"
            slug="a-new-beginning-for-luna"
          />
          <BlogListingCard
            category="Pet Care"
            date="Oct 05, 2023"
            title="10 Tips for Senior Cat Care"
            excerpt="Caring for older cats requires a special touch. Learn about nutrition, comfort, and regular health checkups for your senior felines."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBoYGdcCpukVaXVWNXG9TFlbpXR55mgCUaFPFnRyXfCaxQzgHmg9c5g-tFZhM12k1AYtKM54KXVAWDA5aqnPlHHySr_GMDVhC2BheGZTztzM8a5s4YrAi1h_li_BoPTUBNHE5j3f7auWQ6yya6TOYqsnC5uAt4f13A-l--5jNy8vT7NrkT7ADMdBH10AKCOfCvsYLYv9ra3gAAGl1FmOKvfmMbx5781BX42PphonxPG_HXawaH5hOeiqD6DXiELlSuzzhLd0YxA-3OU"
            imageAlt="Senior cat sitting comfortably on a soft blanket"
            slug="10-tips-senior-cat-care"
          />
          <BlogListingCard
            category="NGO Updates"
            date="Sep 28, 2023"
            title="Our New Shelter Expansion"
            excerpt="We are excited to announce the groundbreaking of our new medical wing, allowing us to help twice as many animals."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRFrzEOkZi9OQ7DzSAklhwRoXhxx1odmgTsSfxFjpxrxAEfKj3QlZpxhC2Qaye0ES1uabmKQZTdJZ92-JAz0mQk9Tvs1SYgC3k_63D5TOCEFZgmdmJf03MTnw9mxI93DZLJ0-6iDYrgB1pRuu1ROZ2lWV2eJ2IeTIYDmuNPVx2jhBcZIt39P79MiChr17nXf2Z80IZ6-z8GsETL5Vyk-F7BCMDOcwh3L7e8c0lbMvtuP6cjY9WwKDYklww3hj8OCnIlv1v2VCPjxK"
            imageAlt="Architectural rendering of a modern animal shelter"
            slug="new-shelter-expansion"
          />
          <BlogListingCard
            category="Rescue Stories"
            date="Sep 15, 2023"
            title="The Miracle of Oliver"
            excerpt="After a difficult rescue operation in the deep woods, Oliver's transformation into a playful pup is nothing short of a miracle."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBEPYYhTYfTkCWZeIrQo-X69qON1GQ1W0koTVQgwfCwOsRqtxYSBcyhFeFgkQQpxyxSZVYNcXa6ooHEti3SacabZU1peOOS9pHuAc5uL1mmU01c5F9GQznUlmTAswSeFcoZVs9OcyBElKwbw25eDooFpZ1gl1dh3BVWm4YIwEfcx8UxCfkaqo4DmJUITit6hwAoNYtnISaf-rLjcGQTI3CbtNjFWQ7_99UmEZ0hAMhMdi0VYSzvgw0GWK5P9uzAt3u8ymg4EEv9oUfZ"
            imageAlt="Small dog jumping with joy in autumn leaves"
            slug="the-miracle-of-oliver"
          />
          <BlogListingCard
            category="NGO Updates"
            date="Sep 10, 2023"
            title="Volunteer Spotlight: Sarah"
            excerpt="Meet Sarah, the heart of our NGO who has dedicated 10 years to wildlife rehabilitation and release."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoulzQzoSic1YeOBSqdGeD-agPXNbdGwAhuSSRywqlA0erACzobRZHHXV8vz-ww8nzBD7KEs0BDAbk8iQCLpxkjirwi8PQ7QnpRz_eEvLswPSxoJBljz0zA5yLRtRr6K2mJaPx6EjgnoLU5b99vVSFHPBZCMbKXvFag4f-9B-U5Hff10-_-rAmqfTe3CQgXbJSxWA6EXS992psJ1CJBSX76Ac7xBYCcMXwe_sFI85IFOEqdfa2bxREkutmOdAc67tHOeo3RY3UT24f"
            imageAlt="Volunteer feeding a baby bird with a dropper"
            slug="volunteer-spotlight-sarah"
          />
          <BlogListingCard
            category="Pet Care"
            date="Sep 01, 2023"
            title="Nutrition 101 for Puppies"
            excerpt="Essential nutrients for growing pups and how to establish a healthy eating routine from day one."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBswz30rUCtHTIe1gchgak0OyIduAQnn5HD0NcfSmantcakTFSSUObhGGUPkhhJibdk1GhoD0LIBl_GbGmHxRyPNbktorAjYHI1VVobDVx6VeBuqOt4nngAltMUEsGq2eq5I43aVwiXA-dRZ8TGW6kEq3qV5njdNe-w7gRhDmofd4jirOnx3F_l2jz7T-5OUKmXofEzvDlXvruUYq2Vw6wfgBJDZWM_-81NbbAhplzKqzsZYLKzNT_OrhsyVH5s__7-5i4WWUzkksi9"
            imageAlt="Row of high-quality organic pet food bowls"
            slug="nutrition-101-for-puppies"
          />
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center">
          <Pagination currentPage={1} totalPages={12} className="border-none w-auto p-0" />
        </div>
      </div>
    </main>
  );
}
