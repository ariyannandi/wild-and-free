import RescueListingCard from "@/components/RescueListingCard";
import { ChevronDown } from "lucide-react";

export default function RescuesPage() {
  return (
    <main className="font-display">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaSnUUZvh9AJkzd6IwQGC2fD8TjoIO-UyB22C4F13Kfv5L2qk1U5NuQdmvKWpbX-JULaSrKlVAxcWhy7Rw0o5sumUpAJIScAlvqe9Gd-fQdjpgk4ygR5PyBUb78DapQ_KtLuEraHB50FZ556FvLE57Wr7AemqKEz-vJzlZm8E5Rq1zHpGr3VDD5ELe_jceA0fYSpyA-0J-rYz-lXgxxqI5kpf2zg9fmr8bMA6JGy4LvS049TAMKtFrqp0MDAi4kBICC0NsUF5ZZZPe')" }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <h2 className="text-white text-5xl md:text-6xl font-black mb-6 tracking-tight">Our Rescues</h2>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
            Meet the resilient souls we've saved. Every animal has a story of courage and a hope for a new beginning. We provide sanctuary, medical care, and a path to a forever home.
          </p>
        </div>
      </section>

      {/* Stats / Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-30 w-full">
        <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 border border-slate-100 dark:border-black">
          <div className="text-center border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black">1,240+</p>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Lives Saved</p>
          </div>
          <div className="text-center md:border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black">45</p>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">In Treatment</p>
          </div>
          <div className="text-center border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black">12</p>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">New This Week</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-3xl font-black">890</p>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Adopted</p>
          </div>
        </div>
      </div>

      {/* Animal Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Currently in our care</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Filter by status or species to find a friend or follow a recovery journey.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-100  rounded-lg cursor-pointer text-sm font-bold hover:bg-[#fff650] transition-colors">All Animals</button>
            <button className="px-4 py-2 bg-slate-100  rounded-lg cursor-pointer text-sm font-bold hover:bg-[#fff650] transition-colors">Dogs</button>
            <button className="px-4 py-2 bg-slate-100  rounded-lg cursor-pointer text-sm font-bold hover:bg-[#fff650] transition-colors">Cats</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <RescueListingCard
            name="Luna"
            breed="Golden Retriever Mix"
            date="Rescued Jan 12, 2024"
            status="Ready for Adoption"
            statusColor="primary"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-KhIv5man-R_7YLIdPxg2rqIXqfH2R_S0fTCC_v0qU8auJ1D_zrSJoJ1beHqNvGBJkZUIwIAJ_iz8N6dtR-aVwIRyDmKobc7YRegEIe6PTHzqu_SJ7IcB9dJ7VgvRKohR01BdF4A8jo7EPxyaSEuDq5GnRp8stUl1iqgD1g35c3FcXn_ztLd4cQG6MMCla8XDNUrMQLV_TolaPTGoreZwldqjzZuh5T0fsknYQxIUhuoWloCHHVCqaniRJ3Keg4HIMvZZBmeIenj"
            imageAlt="Golden retriever puppy sitting in a meadow"
            id="1"
          />
          <RescueListingCard
            name="Max"
            breed="Domestic Shorthair"
            date="Rescued Feb 05, 2024"
            status="In Treatment"
            statusColor="blue"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBVy5csJ2gaWXxOJ9KnaFhK76Xk735iPcF7kGPhhYMAGsQPHdAn7xQNID9FA2B8OnGNl2-51wG2eqtWjD_xn38WWHUmwe2slgUpSv0wVPNUgV2Uvf4qFsvzzWNA3bnclA9Gi2EPvzGeJJFJ_ysupybbrXQ-zjO54HzWVrBw06BniowbkU_hLehc19A7DhXhXmiibwfoePecZl7C9LKHcUIxm3-kIfTKr--BCYw-qG4ulj6K9dzM1n-GIeMKW-Be8ktCLPtTjoTN4oKe"
            imageAlt="Beautiful tabby cat with green eyes"
            id="2"
          />
          <RescueListingCard
            name="Oliver"
            breed="French Bulldog"
            date="Rescued Mar 10, 2024"
            status="In Recovery"
            statusColor="amber"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBo9xS3yk6WIMX6J48v4zF6fn8rmGBbkgWWAECDqr-7E7cygejPoF4kcwcD5bpjtscH-e9uFAcD8Zp6UXA_xxiR03yxZILiihJ-4vk_2g7f68Rr2KRKr5HnDhxvrovwAip2WKrGGr3OXttiOOjOxFUMvPZ49CKD9oaAZHB0HuQdi6bCOLJJw5S9NVuYGqJHGaCA-P9bYGcBs-7XnGEErFJoWATyLMrcE5K-iNOiSClvj6f2pq6hZTTNFmLRAsM16BYsiKb57op4Uiqb"
            imageAlt="French bulldog sitting calmly indoors"
            id="3"
          />
          <RescueListingCard
            name="Bella"
            breed="Beagle"
            date="Rescued Mar 22, 2024"
            status="Ready for Adoption"
            statusColor="primary"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAbdhhwrTiAghKDdJuc3VOq56UiiLV-Bho77HaHKuye_x1z2iSMcJ0NskbWbA6vwrBC0D7tg8UujxZ4nn6wAfwi2RRkvuEyPdLSa9OOY8wXykG4vp1cCG3Z-1vWw99Fji9nXB0LMRbWp_jArE6Bwp7dO8QN8Ui97CqBB2N5A8kRZvNfhCt7VQRu6Ggtr6ZqSb9uKQ6LhBIfebrjbZqghLEi1ZRsuUCzyHMIJLPZ1hZAvx9nGON_53Wk_ltywgcwAREAp9CVa2Tm3Sgc"
            imageAlt="Loyal beagle dog with floppy ears"
            id="4"
          />
          <RescueListingCard
            name="Cooper"
            breed="Rescue Cat"
            date="Rescued April 02, 2024"
            status="In Recovery"
            statusColor="amber"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBqq5xpujtVxEsOjt0adQOyXtUp6ym9yu2xFVzKZx9xfaPVWqTx_moANl2Lsp_rFQ0hLAaJFOg82RE5mBPgjMVNFqtwis5sH8RePeNcRVqEQxMA756tNdIaP8wzxt_x3sWV8frlUXaP09cFeQw9IzxapaEKrHOiORT2TFZCm0t3VYt5DnIxRelJf-FHDVFcXigxwthrEZ-sgtgbRrLnsmvLffeJY40CoeupZV0-YTjwGFJZEdHTDTEJGfI84nuWOu61PEUPEs3GlPRE"
            imageAlt="White and ginger kitten playful look"
            id="5"
          />
          <RescueListingCard
            name="Shadow"
            breed="Husky Mix"
            date="Rescued April 15, 2024"
            status="In Treatment"
            statusColor="blue"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBN76gcjUvCmyUAJV5l0EYJUr55ceBBZK8ydvF4Jl_hFOU0YTETA8Gg5sxxjL5BSzp7bcvq2467qnTFKt8zk8JHxra5GpezjEcDLjFVprNEjwhPqRz8TWHl632HcjeFkdEO3xmrAF8B_ZSqNIJ8VspNhtC7xHNspeSCpfmZS9dptlaxyqjF7ayWPryOeMBF8HgC3xcVYKCrMtn4aBDEiREmnHC4xxfVvjQwHKKHYYcdmyHnmYLeJ4cJhUit3__zuKI4AheAUgGGGgfR"
            imageAlt="Young husky dog with bright blue eyes"
            id="6"
          />
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary/20 text-slate-900 cursor-pointer rounded-xl font-black hover:bg-primary/30 transition-colors">
            Load More Animals
            <span className="material-symbols-outlined"><ChevronDown /></span>
          </button>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-primary py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Subscribe to Rescue Tales</h2>
          <p className="text-slate-800 text-lg max-w-xl mb-10 font-medium">Get weekly updates on our newest rescues and heartwarming success stories delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <input className="flex-grow px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-black text-slate-900" placeholder="Your email address" type="email" />
            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black hover:opacity-90 transition-opacity whitespace-nowrap" type="submit">Join Us</button>
          </form>
        </div>
      </section>
    </main>
  );
}
