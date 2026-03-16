import Link from "next/link";
import { notFound } from "next/navigation";
import RescueGallery from "@/components/RescueGallery";
import RescueFactsCard from "@/components/RescueFactsCard";
import RescueStoryContent from "@/components/RescueStoryContent";
import RescueCTA from "@/components/RescueCTA";

// ─── Static data store ──────────────────────────────────────────────────────
// In a real app this would come from a CMS / database.
const RESCUES: Record<string, RescueData> = {
  "1": {
    id: "1",
    slug: "luna",
    name: "Luna",
    species: "Dog",
    breed: "Golden Retriever Mix",
    rescueDate: "January 12, 2024",
    location: "Riverside County, CA",
    status: "Recovered & Healthy",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-KhIv5man-R_7YLIdPxg2rqIXqfH2R_S0fTCC_v0qU8auJ1D_zrSJoJ1beHqNvGBJkZUIwIAJ_iz8N6dtR-aVwIRyDmKobc7YRegEIe6PTHzqu_SJ7IcB9dJ7VgvRKohR01BdF4A8jo7EPxyaSEuDq5GnRp8stUl1iqgD1g35c3FcXn_ztLd4cQG6MMCla8XDNUrMQLV_TolaPTGoreZwldqjzZuh5T0fsknYQxIUhuoWloCHHVCqaniRJ3Keg4HIMvZZBmeIenj",
    mainImageAlt: "Luna, a golden retriever mix, after recovery",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVdqQvK_kCqs4i3jjHclV9-ns68GD_jPDNI4jmGOT9vbJQmvvy9AHQZSudqTaL6AdEqjeXKYARxIfkEzkJwue8km6B4EAT59AkRx-Bctz7X2889XC3a175T99F61heM3xLyXWV92V0zZK2rN9Eq6di9qikxg_nlA7GVRTToavNqKluUGS3syEzigPadzWXY74ExVpMCemtNS2k3Hpu_xb0r2Jb0hbwbNWw5QOQvX2u6j6685bd2jt9JWG7nZio1qpCVRdIFZxj0cEN",
        alt: "Luna receiving care at the shelter",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5wNLzJylwG2UBFj5BUukyc-qsuBeuR5S9AkT4KknW0x8Vjv-AMYuhks00axdghxzes0Uqi9OaPQIWur5ouXW74MioqcV_IVoc-5VfU8KmC2uZ3DAd1HiK5_JRraqTDhY1qimAPVa8-3L8fz_N7O_nYom-k9wiYa4nn6f3i-3GtZdGHzz5QvCN3qmcjbW751UxIhvFRKC3iZXRROwfegWOdmvmEMDjl7qViVzXYJpBjpfGARGPVRjkYjeFX-km1oqI6LT1UdNhJc12",
        alt: "Luna playing with a ball",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb5EtN2ioJZeLZR21CnB_aiE9bGi2U3kcWZSZN_xHUJOGNSceyLqkf8r3F6qL_ohx1qeJpgS-jvrctbTSn4yGMmpDlx8P918kmiwbCR9GTQncc99h_CXJBlktrA0K0LRNgbWwNOB1PM2ArPegyJafGT2q5Sub-PVGvHSF-2QWbWgUnzE48g1GJa52E9zlSr5OVUiXyvwXdAwp8_aWHxRAR3kBbkTkN-TFXSGIIbRbzoFwLY3fWkvh8NseITaitZ5Tksh8OWO7xF87x",
        alt: "Luna safe in her new environment",
      },
    ],
    lead:
      "Luna was found wandering near a construction site during a record-breaking heatwave. Our rescue team arrived to find her severely dehydrated, suffering from advanced mange, and utterly exhausted from fighting for survival on her own.",
    quote:
      "She didn't have much strength left, but when we offered her water, her tail gave one weak, hopeful wag. We knew then she was a fighter.",
    quoteAuthor: "Sarah Miller, Lead Rescuer",
    sections: [
      {
        heading: "The Long Road Home",
        body: "The first three weeks were critical. Luna required round-the-clock intravenous fluids and specialised medicated baths to treat her skin condition. Our veterinary team also discovered she was suffering from heartworm — a common but dangerous condition for rescue animals in this region.",
      },
      {
        heading: "Medical Challenges",
        body: "Our veterinary team worked tirelessly to stabilise Luna's condition. She underwent three rounds of medicated treatments and daily wound dressing. Despite the pain, she remained patient and gentle throughout every procedure.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBVdqQvK_kCqs4i3jjHclV9-ns68GD_jPDNI4jmGOT9vbJQmvvy9AHQZSudqTaL6AdEqjeXKYARxIfkEzkJwue8km6B4EAT59AkRx-Bctz7X2889XC3a175T99F61heM3xLyXWV92V0zZK2rN9Eq6di9qikxg_nlA7GVRTToavNqKluUGS3syEzigPadzWXY74ExVpMCemtNS2k3Hpu_xb0r2Jb0hbwbNWw5QOQvX2u6j6685bd2jt9JWG7nZio1qpCVRdIFZxj0cEN",
        imageAlt: "Luna receiving medical treatment",
      },
      {
        heading: "Rehabilitation & Spirit",
        body: "As her skin healed and her golden coat began to grow back, Luna's true personality emerged. She is gentle and loves tennis balls, morning walks, and resting her head on your knee. She is now fully cleared of all medical issues and is ready to find a forever home where she'll never be abandoned again.",
      },
    ],
  },
  "2": {
    id: "2",
    slug: "max",
    name: "Max",
    species: "Cat",
    breed: "Domestic Shorthair",
    rescueDate: "February 5, 2024",
    location: "San Diego, CA",
    status: "In Treatment",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVy5csJ2gaWXxOJ9KnaFhK76Xk735iPcF7kGPhhYMAGsQPHdAn7xQNID9FA2B8OnGNl2-51wG2eqtWjD_xn38WWHUmwe2slgUpSv0wVPNUgV2Uvf4qFsvzzWNA3bnclA9Gi2EPvzGeJJFJ_ysupybbrXQ-zjO54HzWVrBw06BniowbkU_hLehc19A7DhXhXmiibwfoePecZl7C9LKHcUIxm3-kIfTKr--BCYw-qG4ulj6K9dzM1n-GIeMKW-Be8ktCLPtTjoTN4oKe",
    mainImageAlt: "Max, a tabby cat with green eyes",
    galleryImages: [],
    lead:
      "Max was brought to us after being found trapped inside an abandoned building for over two weeks. Malnourished and frightened, he required immediate veterinary attention.",
    quote: "Max hissed the first time we approached, but by day three he was purring in our arms.",
    quoteAuthor: "Dr. Amelia Chen, Veterinarian",
    sections: [
      {
        heading: "A Frightened Beginning",
        body: "When Max first arrived, he was too scared to eat. Our team gave him space and let him settle at his own pace. Within a week, his naturally curious nature began to shine through.",
      },
      {
        heading: "Treatment & Recovery",
        body: "Max required treatment for dehydration, a respiratory infection, and minor injuries from his ordeal. Today he is housed in our care wing, steadily gaining weight and confidence.",
      },
    ],
  },
  "3": {
    id: "3",
    slug: "oliver",
    name: "Oliver",
    species: "Dog",
    breed: "French Bulldog",
    rescueDate: "March 10, 2024",
    location: "Los Angeles, CA",
    status: "In Recovery",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo9xS3yk6WIMX6J48v4zF6fn8rmGBbkgWWAECDqr-7E7cygejPoF4kcwcD5bpjtscH-e9uFAcD8Zp6UXA_xxiR03yxZILiihJ-4vk_2g7f68Rr2KRKr5HnDhxvrovwAip2WKrGGr3OXttiOOjOxFUMvPZ49CKD9oaAZHB0HuQdi6bCOLJJw5S9NVuYGqJHGaCA-P9bYGcBs-7XnGEErFJoWATyLMrcE5K-iNOiSClvj6f2pq6hZTTNFmLRAsM16BYsiKb57op4Uiqb",
    mainImageAlt: "Oliver, a French Bulldog sitting calmly",
    galleryImages: [],
    lead:
      "Oliver was found tied to a fence post in sweltering heat with no food or water. A local resident spotted him and called us immediately.",
    quote: "Oliver didn't bark once during his entire first examination. He just looked up at us with the most trusting eyes.",
    quoteAuthor: "James Park, Rescue Volunteer",
    sections: [
      {
        heading: "Heat Exhaustion & First Aid",
        body: "Oliver arrived in a dangerous state of heat exhaustion. Our team cooled him down immediately and administered fluids. Despite the trauma, he remained calm throughout.",
      },
      {
        heading: "Progressing Every Day",
        body: "Oliver is currently in our recovery ward and is gaining strength day by day. He loves belly rubs and has already made friends with two cats in the adjacent enclosure.",
      },
    ],
  },
  "4": {
    id: "4",
    slug: "bella",
    name: "Bella",
    species: "Dog",
    breed: "Golden Retriever",
    rescueDate: "October 12, 2023",
    location: "Riverside County, CA",
    status: "Recovered & Healthy",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbdhhwrTiAghKDdJuc3VOq56UiiLV-Bho77HaHKuye_x1z2iSMcJ0NskbWbA6vwrBC0D7tg8UujxZ4nn6wAfwi2RRkvuEyPdLSa9OOY8wXykG4vp1cCG3Z-1vWw99Fji9nXB0LMRbWp_jArE6Bwp7dO8QN8Ui97CqBB2N5A8kRZvNfhCt7VQRu6Ggtr6ZqSb9uKQ6LhBIfebrjbZqghLEi1ZRsuUCzyHMIJLPZ1hZAvx9nGON_53Wk_ltywgcwAREAp9CVa2Tm3Sgc",
    mainImageAlt: "Bella the Golden Retriever looking happy",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVdqQvK_kCqs4i3jjHclV9-ns68GD_jPDNI4jmGOT9vbJQmvvy9AHQZSudqTaL6AdEqjeXKYARxIfkEzkJwue8km6B4EAT59AkRx-Bctz7X2889XC3a175T99F61heM3xLyXWV92V0zZK2rN9Eq6di9qikxg_nlA7GVRTToavNqKluUGS3syEzigPadzWXY74ExVpMCemtNS2k3Hpu_xb0r2Jb0hbwbNWw5QOQvX2u6j6685bd2jt9JWG7nZio1qpCVRdIFZxj0cEN",
        alt: "Bella during recovery",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5wNLzJylwG2UBFj5BUukyc-qsuBeuR5S9AkT4KknW0x8Vjv-AMYuhks00axdghxzes0Uqi9OaPQIWur5ouXW74MioqcV_IVoc-5VfU8KmC2uZ3DAd1HiK5_JRraqTDhY1qimAPVa8-3L8fz_N7O_nYom-k9wiYa4nn6f3i-3GtZdGHzz5QvCN3qmcjbW751UxIhvFRKC3iZXRROwfegWOdmvmEMDjl7qViVzXYJpBjpfGARGPVRjkYjeFX-km1oqI6LT1UdNhJc12",
        alt: "Bella playing outside",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdsPaXg-uUojnElQOz83_SUqHRV7OshMFpwmbfxLM0epw_WJnPZ-kGsKuX3ptKY21UXRpGdnCfnipdV6vdtCy5f9I2FFf6hWPI2sTjruHsNK5C_uoZm0WWNph1NGx6q-2XMTcchWACfdeb-XwSj35RrH3h4fFMK7RvRbYnWQwxwXIEZi_YQvjy4UYHNXeiHLKMuf32MWE7BD6_hmwR6fAvkCN6Gzpw_8kJhoGgAuIlHAWwMcHgfSQ0bbbe01qAUTksoWaNTbaS1jWY",
        alt: "Bella with her favourite toy",
      },
    ],
    lead:
      "Bella was found abandoned near a construction site during a record-breaking heatwave. When our rescue team arrived, she was severely dehydrated, suffering from advanced mange, and utterly exhausted from fighting for survival on her own.",
    quote:
      "She didn't have much strength left, but when we offered her water, her tail gave one weak, hopeful wag. We knew then she was a fighter.",
    quoteAuthor: "Sarah Miller, Lead Rescuer",
    sections: [
      {
        heading: "The Long Road Home",
        body: "The first three weeks were critical. Bella required round-the-clock intravenous fluids and specialised medicated baths to treat her skin condition. Our veterinary team also discovered she was suffering from heartworm — a common but dangerous condition for rescue animals in this region.",
      },
      {
        heading: "Medical Challenges",
        body: "Our veterinary team worked tirelessly. She underwent three rounds of medicated treatments and daily wound dressing. Despite the pain, she remained patient and gentle throughout every procedure.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBVdqQvK_kCqs4i3jjHclV9-ns68GD_jPDNI4jmGOT9vbJQmvvy9AHQZSudqTaL6AdEqjeXKYARxIfkEzkJwue8km6B4EAT59AkRx-Bctz7X2889XC3a175T99F61heM3xLyXWV92V0zZK2rN9Eq6di9qikxg_nlA7GVRTToavNqKluUGS3syEzigPadzWXY74ExVpMCemtNS2k3Hpu_xb0r2Jb0hbwbNWw5QOQvX2u6j6685bd2jt9JWG7nZio1qpCVRdIFZxj0cEN",
        imageAlt: "Bella during medical treatment",
      },
      {
        heading: "Rehabilitation & Spirit",
        body: "As her coat grew back, Bella's true personality emerged — gentle, playful, and deeply affectionate. Today she is fully cleared of all medical issues and ready to find a forever home.",
      },
    ],
  },
  "5": {
    id: "5",
    slug: "cooper",
    name: "Cooper",
    species: "Cat",
    breed: "Rescue Cat",
    rescueDate: "April 2, 2024",
    location: "Sacramento, CA",
    status: "In Recovery",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqq5xpujtVxEsOjt0adQOyXtUp6ym9yu2xFVzKZx9xfaPVWqTx_moANl2Lsp_rFQ0hLAaJFOg82RE5mBPgjMVNFqtwis5sH8RePeNcRVqEQxMA756tNdIaP8wzxt_x3sWV8frlUXaP09cFeQw9IzxapaEKrHOiORT2TFZCm0t3VYt5DnIxRelJf-FHDVFcXigxwthrEZ-sgtgbRrLnsmvLffeJY40CoeupZV0-YTjwGFJZEdHTDTEJGfI84nuWOu61PEUPEs3GlPRE",
    mainImageAlt: "Cooper, a white and ginger kitten",
    galleryImages: [],
    lead:
      "Cooper was found in a box left outside our shelter gates on a rainy night. Despite the cold and uncertainty, he was alert and vocal, demanding attention immediately.",
    quote: "Cooper had every reason to be afraid. Instead, he chose to trust us from the very first moment.",
    quoteAuthor: "Maya Torres, Shelter Manager",
    sections: [
      {
        heading: "A Surprise Arrival",
        body: "Staff arriving early found the box before the cold could take its toll. Cooper was immediately brought in, checked over, and given a warm bed. His resilience was remarkable.",
      },
      {
        heading: "Growing Strong",
        body: "Cooper is currently thriving in our kitten recovery room. He is playful, curious, and adores attention. He'll be ready for adoption once he completes his vaccination schedule.",
      },
    ],
  },
  "6": {
    id: "6",
    slug: "shadow",
    name: "Shadow",
    species: "Dog",
    breed: "Husky Mix",
    rescueDate: "April 15, 2024",
    location: "Fresno, CA",
    status: "In Treatment",
    mainImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN76gcjUvCmyUAJV5l0EYJUr55ceBBZK8ydvF4Jl_hFOU0YTETA8Gg5sxxjL5BSzp7bcvq2467qnTFKt8zk8JHxra5GpezjEcDLjFVprNEjwhPqRz8TWHl632HcjeFkdEO3xmrAF8B_ZSqNIJ8VspNhtC7xHNspeSCpfmZS9dptlaxyqjF7ayWPryOeMBF8HgC3xcVYKCrMtn4aBDEiREmnHC4xxfVvjQwHKKHYYcdmyHnmYLeJ4cJhUit3__zuKI4AheAUgGGGgfR",
    mainImageAlt: "Shadow, a husky mix with bright blue eyes",
    galleryImages: [],
    lead:
      "Shadow was found wandering the highway median, confused and scared. Motorists reported him for hours before our rescue team could safely retrieve him.",
    quote: "He was terrified of everything — except water. The moment we gave him a bowl, he calmed right down.",
    quoteAuthor: "Carlos Rivera, Field Rescue Lead",
    sections: [
      {
        heading: "Highway Rescue",
        body: "Rescuing Shadow from a busy highway required coordination with local traffic authorities. Our team worked in shifts for four hours before gaining his trust enough to approach.",
      },
      {
        heading: "rehabilitation Progress",
        body: "Shadow is currently working through his anxiety with our certified animal behaviourist. He responds well to routine and is beginning to show his playful Husky personality to the team.",
      },
    ],
  },
};

interface RescueData {
  id: string;
  slug: string;
  name: string;
  species: string;
  breed: string;
  rescueDate: string;
  location: string;
  status: string;
  mainImageUrl: string;
  mainImageAlt: string;
  galleryImages: { url: string; alt: string }[];
  lead: string;
  quote: string;
  quoteAuthor: string;
  sections: { heading: string; body: string; imageUrl?: string; imageAlt?: string }[];
}

// ─── Page ────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(RESCUES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rescue = RESCUES[id];
  if (!rescue) return { title: "Rescue Not Found" };
  return {
    title: `The Story of ${rescue.name} | Wild and Free NGO`,
    description: rescue.lead,
  };
}

export default async function RescueStoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rescue = RESCUES[id];

  if (!rescue) notFound();

  return (
    <main className="font-display bg-white min-h-screen">
      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <Link href="/rescues" className="hover:text-primary transition-colors">Rescues</Link>
          <span>›</span>
          <span className="text-slate-600">The Story of {rescue.name}</span>
        </nav>
      </div>

      {/* ── Hero title ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-3">
          The Story of{" "}
          <span className="bg-primary px-2 rounded-lg">{rescue.name}</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          From a neglected roadside rescue to a vibrant soul full of life. This is the journey of {rescue.name} the {rescue.breed}.
        </p>
      </div>

      {/* ── Two-column layout ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-2 space-y-12">
          <RescueGallery
            mainImageUrl={rescue.mainImageUrl}
            mainImageAlt={rescue.mainImageAlt}
            galleryImages={rescue.galleryImages}
          />

          {/* Divider */}
          <hr className="border-slate-100" />

          {/* Story content */}
          <RescueStoryContent
            lead={rescue.lead}
            quote={rescue.quote}
            quoteAuthor={rescue.quoteAuthor}
            sections={rescue.sections}
          />
        </div>

        {/* Right: Facts sidebar */}
        <div className="lg:col-span-1">
          <RescueFactsCard
            name={rescue.name}
            status={rescue.status}
            rescueDate={rescue.rescueDate}
            location={rescue.location}
            species={rescue.species}
            breed={rescue.breed}
            slug={rescue.slug}
          />
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <RescueCTA name={rescue.name} slug={rescue.slug} />
    </main>
  );
}
