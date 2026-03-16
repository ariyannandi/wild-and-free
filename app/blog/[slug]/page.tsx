import Image from "next/image";
import Link from "next/link";
import BlogListingCard from "@/components/BlogListingCard";
import { ArrowRight, Bookmark, Share } from "lucide-react";

export default function BlogArticlePage() {
  return (
    <main className="min-h-screen font-display bg-white ">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary/20 text-black text-xs font-bold uppercase tracking-widest rounded-full">Rescue Stories</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-500 font-medium">Sept 15, 2023</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black  leading-tight mb-6">
            The Miracle of Oliver: A Journey from Rescue to Recovery
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
              <Image
                className="object-cover"
                alt="Portrait of Sarah Jenkins, the author"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOCtwV_S3eNoTnPDuYUVp1YprmXOm1wDs_z4rhA4fHnRPQ-uV4UjhdZ-O3dPfmX1YBMPr000kEidDcokDBryCTF8f0VZST21QIm84IbnTmMt9VvVdFvWvf68vC81gwLN55Kf3w9P4VNVfsLP9gxlhgrMOJmoItsgqikpp1AZeJKaFn_468OPWABJ2h4HfHSGYWLh3oTpLm8rVA-JOnBIJssn9RY2tpBloLz--bA7dig3wsyoXilFliegfs-sdQ-O-V_M9EzamXNBHF"
                fill
              />
            </div>
            <div>
              <p className="text-sm font-bold text-black dark:text-white leading-none">Sarah Jenkins</p>
              <p className="text-xs text-slate-500 mt-1">Senior Rescue Coordinator</p>
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl mb-12 bg-slate-100">
          <Image
            className="object-cover"
            alt="A small rescued golden retriever puppy sitting in grass"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5EtN2ioJZeLZR21CnB_aiE9bGi2U3kcWZSZN_xHUJOGNSceyLqkf8r3F6qL_ohx1qeJpgS-jvrctbTSn4yGMmpDlx8P918kmiwbCR9GTQncc99h_CXJBlktrA0K0LRNgbWwNOB1PM2ArPegyJafGT2q5Sub-PVGvHSF-2QWbWgUnzE48g1GJa52E9zlSr5OVUiXyvwXdAwp8_aWHxRAR3kBbkTkN-TFXSGIIbRbzoFwLY3fWkvh8NseITaitZ5Tksh8OWO7xF87x"
            fill
          />
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto prose prose-slate dark:prose-invert lg:prose-xl">
          <p className="text-xl text-slate-500 leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
            Oliver was found shivering in an abandoned warehouse, his spirit nearly broken. The journey ahead was long, but our team at Wild and Free knew that every life is worth the fight.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-12">A Rough Start</h2>
          <p className="text-secondary leading-relaxed mb-6">
            When our rescue team first arrived at the site, we weren't even sure if Oliver would make it through the night. He was severely dehydrated, malnourished, and terrified of human contact. Our lead veterinarian, Dr. Aris, described his condition as "critical but hopeful."
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            For the first forty-eight hours, it was touch and go. Oliver stayed in our intensive care unit, receiving intravenous fluids and gentle warming treatments. Every member of the staff took turns sitting by his crate, whispering words of encouragement to a dog that had likely never heard a kind word in his life.
          </p>

          <div className="bg-black   text-white p-8 rounded-xl my-10 relative overflow-hidden">
            <p className="text-2xl font-bold relative z-10 italic">
              "The transformation wasn't just physical. As his wounds healed, we saw the light return to his eyes. That's the real miracle of rescue."
            </p>
            <p className="mt-4 font-bold text-primary">— Sarah Jenkins</p>
          </div>

          <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-12">The Turning Point</h2>
          <p className="text-secondary leading-relaxed mb-6">
            The real breakthrough happened on day ten. For the first time, Oliver wagged his tail. It was a small, hesitant movement, but to us, it was a thunderous celebration. He began to accept treats and, eventually, allowed us to brush his matted fur.
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            Recovery is never linear. There were setbacks—a bout of kennel cough and the lingering anxiety from his past—but Oliver proved to be a fighter. Through specialized training and socialization sessions, he learned that not all humans are a threat.
          </p>

          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100">
              <Image
                className="object-cover"
                alt="Oliver receiving a medical checkup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVdqQvK_kCqs4i3jjHclV9-ns68GD_jPDNI4jmGOT9vbJQmvvy9AHQZSudqTaL6AdEqjeXKYARxIfkEzkJwue8km6B4EAT59AkRx-Bctz7X2889XC3a175T99F61heM3xLyXWV92V0zZK2rN9Eq6di9qikxg_nlA7GVRTToavNqKluUGS3syEzigPadzWXY74ExVpMCemtNS2k3Hpu_xb0r2Jb0hbwbNWw5QOQvX2u6j6685bd2jt9JWG7nZio1qpCVRdIFZxj0cEN"
                fill
              />
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100">
              <Image
                className="object-cover"
                alt="Oliver playing with a ball in the garden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5wNLzJylwG2UBFj5BUukyc-qsuBeuR5S9AkT4KknW0x8Vjv-AMYuhks00axdghxzes0Uqi9OaPQIWur5ouXW74MioqcV_IVoc-5VfU8KmC2uZ3DAd1HiK5_JRraqTDhY1qimAPVa8-3L8fz_N7O_nYom-k9wiYa4nn6f3i-3GtZdGHzz5QvCN3qmcjbW751UxIhvFRKC3iZXRROwfegWOdmvmEMDjl7qViVzXYJpBjpfGARGPVRjkYjeFX-km1oqI6LT1UdNhJc12"
                fill
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-12">A New Beginning</h2>
          <p className="text-secondary leading-relaxed mb-6">
            Today, Oliver is unrecognizable from the dog we found in that warehouse. He lives with a loving family on a three-acre farm, where he spends his days chasing butterflies and napping in patches of sunlight. His journey reminds us why we do what we do.
          </p>
        </article>

        {/* Share and Tags */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-slate-100 dark:border-slate-800 mt-12 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-secondary text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">#RescueDogs</span>
            <span className="px-3 py-1 bg-secondary text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">#SuccessStories</span>
            <span className="px-3 py-1 bg-secondary text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">#NGO</span>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-secondary text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-all">
              <span className="material-symbols-outlined text-xl"><Share /></span>
            </button>
            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-secondary text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-black transition-all">
              <span className="material-symbols-outlined text-xl"><Bookmark /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-secondary py-20 mt-20 border-b border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-2">More Rescue Stories</h2>
              <p className="text-slate-500">Inspiring journeys from our shelter to happy homes.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 font-bold text-black dark:text-white hover:underline">
              View All Stories <span className="material-symbols-outlined"><ArrowRight /></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogListingCard
              category="Puppy Love"
              date="Aug 10, 2023"
              title="Finding Hope: The Tale of Luna and Max"
              excerpt="How two inseparable siblings found their forever home against all odds."
              slug="finding-hope-luna-and-max"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsPaXg-uUojnElQOz83_SUqHRV7OshMFpwmbfxLM0epw_WJnPZ-kGsKuX3ptKY21UXRpGdnCfnipdV6vdtCy5f9I2FFf6hWPI2sTjruHsNK5C_uoZm0WWNph1NGx6q-2XMTcchWACfdeb-XwSj35RrH3h4fFMK7RvRbYnWQwxwXIEZi_YQvjy4UYHNXeiHLKMuf32MWE7BD6_hmwR6fAvkCN6Gzpw_8kJhoGgAuIlHAWwMcHgfSQ0bbbe01qAUTksoWaNTbaS1jWY"
              imageAlt="Two small dogs playing together"
            />
            <BlogListingCard
              category="Cat Rescue"
              date="Jul 22, 2023"
              title="The Queen of Quiet: Bella’s New Palace"
              excerpt="From city alleyways to a quiet countryside estate, Bella's journey is unique."
              slug="queen-of-quiet-bella"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBe3S0GziQyFtSksajSJu8c5fg9F-Uv6Oi7_rJc7elU7-iEY_WaaWKYKDCoUPN3QsUywrmhWVJeWOK3lCt4qOmBRZUZkFn9O0evyusdrgLRy1tuN4lfJCE7CFplZT3VY_3A31hmFQXk5U5lieEMSiS-VI5T8LBfeq9FNOQzB_nAxelxZbe1wOLWfFMAaMC6bxiUX-3gUoDTVWqHL5DeIJXfvsjIAYfJcG4PjmZcW-hV6fBqcvtg5JXmDi_uLQQFb1ErirL5okQEF8Qa"
              imageAlt="A beautiful rescued cat sitting on a windowsill"
            />
            <BlogListingCard
              category="Senior Rescues"
              date="Jun 05, 2023"
              title="Senior Dogs: Why Older is Bolder"
              excerpt="A look at the incredible joy that comes with adopting a senior animal."
              slug="senior-dogs-older-bolder"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGV6RXjHFq4wJB3KFsQxIPx7Adi0VLTWcIEIBTSA2n6k7NFRHl8-EHDhblYwKHMf5QYRr0OrsMQv660tuUoIYRfJtwhRMLgC6BApx9f3lNYrLDhMJy4Wl8-wFGapPwohRb1WThVaRIbhvV1P6iYVBHT8sVNKz1hD-833KYKIB9p9wwnMA2oxuIhpVbfkyvxAD03GgmW_ndgPCEkZGOwchc8StfrxV0QjxnXoJTA9QhHb7LiX1gqVX5Vs8HkoimrP5f4OnXKQUWx3T"
              imageAlt="A large dog being petted by a volunteer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
