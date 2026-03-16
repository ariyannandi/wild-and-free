import { notFound } from "next/navigation";
import Link from "next/link";
import SuccessHero from "@/components/SuccessHero";
import SuccessStats from "@/components/SuccessStats";
import TransformationSection from "@/components/TransformationSection";
import SuccessStoryNarrative from "@/components/SuccessStoryNarrative";
import FamilyQuoteSection from "@/components/FamilyQuoteSection";
import SuccessCTA from "@/components/SuccessCTA";

// ─── Data store ──────────────────────────────────────────────────────────────
interface StoryData {
  id: string;
  slug: string;
  name: string;
  heroImageUrl: string;
  heroImageAlt: string;
  tagline: string;
  subtitle: string;
  adoptionDate: string;
  family: string;
  phone?: string;
  stats: { value: string; label: string }[];
  beforeImageUrl: string;
  beforeImageAlt: string;
  beforeCaption: string;
  afterImageUrl: string;
  afterImageAlt: string;
  afterCaption: string;
  sectionTitle: string;
  paragraphs: string[];
  quote: string;
  familyAvatarUrl?: string;
}

const STORIES: Record<string, StoryData> = {
  "1": {
    id: "1",
    slug: "luna",
    name: "Luna",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQYyTFdb9h-GK5RJ3Jxyfweibaolr1qLFGUClWETMm3U-ZLKNX3uSIXnjCPN-fxsvl0K2frZkR8DNukf3XtZqtia9mLuaA0vUP440rVHM49i0g-Qml-P2Z27EyajEkYzBxhnp2d4VMdzZQQv_lsdGX_ce9dg549bsTI1VffrRSpl1Jz12yQ158Toz9ju5qYkD3M7Aoae_xxgOmfzgvt_dzY1Bd8ij5LTHKBdAsgMNoD9WMvOdbkLJmrUJBbAhVkfPSkMTnspqjEEgl",
    heroImageAlt: "Luna the golden retriever running happily in a park",
    tagline: "From shivering alleyway stray to beloved family member",
    subtitle:
      "From a shivering alley stray to the beloved center of a family. This is the story of Luna's second chance.",
    adoptionDate: "October 14, 2023",
    family: "The Henderson Family",
    phone: "+1 (323) 456-0410",
    stats: [
      { value: "3 mo.", label: "In Rehabilitation" },
      { value: "Oct '23", label: "Adoption Date" },
      { value: "1 yr", label: "Now Happy" },
      { value: "100%", label: "Thriving" },
    ],
    beforeImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2kSM5to0cXXM5C9somxYDb07b1ufASzD3TNRgYOKXJS_EwBW2bh2mo_lMtEsDL-yNUZNr_0IYqYys8nRVchAcXNLDiR29tnQqIzat1_qDnVp3_y4TJ89mWr5yrAUvzTodcBfdVScW8tMPAijdBGgwFGnNDntBKkfsbS-s0ZQzQM6a_YTnAE4pz4i-eup0P89AoEbk097-l3RbnYGQUuzXrX84ijmFgrWOsK1eIcjHoCRFq1S0F7Koa6Teh4qa9cVIQ2yoMfhlFrmz",
    beforeImageAlt: "Scared neglected golden retriever in a shelter",
    beforeCaption:
      "Luna was found huddled behind a dumpster, severely underweight and terrified of any human contact. She wouldn't even eat in the presence of people.",
    afterImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQYyTFdb9h-GK5RJ3Jxyfweibaolr1qLFGUClWETMm3U-ZLKNX3uSIXnjCPN-fxsvl0K2frZkR8DNukf3XtZqtia9mLuaA0vUP440rVHM49i0g-Qml-P2Z27EyajEkYzBxhnp2d4VMdzZQQv_lsdGX_ce9dg549bsTI1VffrRSpl1Jz12yQ158Toz9ju5qYkD3M7Aoae_xxgOmfzgvt_dzY1Bd8ij5LTHKBdAsgMNoD9WMvOdbkLJmrUJBbAhVkfPSkMTnspqjEEgl",
    afterImageAlt: "Happy healthy golden retriever running in a park",
    afterCaption:
      "Today Luna is a different dog. She waits by the door every morning, ready to run. Her resilience is the heart of the Henderson home.",
    sectionTitle: "The Journey Home",
    paragraphs: [
      "Finding Luna was a pure chance. Our volunteer team was out for a routine check over the local district when she caught a slight glint of light, reflecting from a dusty bin at the back of a shopping centre. She didn't growl. She just laid there, watching.",
      "The first few weeks at the Wild and Free sanctuary were a delicate dance. Luna wouldn't eat if anyone was watching. She slept with one eye open, always ready to dart. Above all movement, she mistrusted a hand for a scratch. She was slowly learning, for the first time in what appeared a good while, to trust. That change was what mattered.",
      "When Anna first saw how the Henderson walked into the corner, a sudden sojourn, a habit. They were looking for a younger dog. They fell in love with the elder right on. She can usually tell if humans are cold but Lunasold connection — she knew if these were the ones.",
      "Today, Luna greets the morning by bringing toys to whoever is in the kitchen. Something marriage between Golden and Mutt, she has the firm, firm precise military way to love. She is a member of a new most cherished kingdom she will never be without again.",
    ],
    quote:
      "We thought we were going to save a dog, but in the end, [name] saved us. Her resilience is a daily reminder that no matter what life throws at you, you can always find your way home.",
    familyAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2kSM5to0cXXM5C9somxYDb07b1ufASzD3TNRgYOKXJS_EwBW2bh2mo_lMtEsDL-yNUZNr_0IYqYys8nRVchAcXNLDiR29tnQqIzat1_qDnVp3_y4TJ89mWr5yrAUvzTodcBfdVScW8tMPAijdBGgwFGnNDntBKkfsbS-s0ZQzQM6a_YTnAE4pz4i-eup0P89AoEbk097-l3RbnYGQUuzXrX84ijmFgrWOsK1eIcjHoCRFq1S0F7Koa6Teh4qa9cVIQ2yoMfhlFrmz",
  },
  "2": {
    id: "2",
    slug: "oliver",
    name: "Oliver",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBOltFL2erIHYRi_vrYv1aC3ahM-c2S_JQDLdj_XRD1l1R6UvSG0K8t-G0lkmuf97qgJgFb_afU3O3m_ZI69vzQUIGOcZwRjIBHirzG_iF88tspv9LsBX_Ft8F6tAXL1bNnEvLWlliedpLx6v395PhkAwoDsSKBdXWjoWmeTzF-YeWdBNmLL32UAV2dYuvoYK6UR7ov528LOPcWxaujq8s0mK0iiJo0YmeijwLSc528rtsXbqdlwET2vegXCfi-V7QgTG0m0eCdEcY",
    heroImageAlt: "Oliver the calico cat sleeping on a soft sofa",
    tagline: "From the highway interchange to the warmest lap in the city",
    subtitle:
      "From a ghost cat who wouldn't be seen to a professional lap-warmer with the loudest purr in town. This is Oliver's story.",
    adoptionDate: "August 24, 2023",
    family: "Sarah Jenkins",
    stats: [
      { value: "2 mo.", label: "In Rehabilitation" },
      { value: "Aug '23", label: "Adoption Date" },
      { value: "Purr+", label: "Happiness Level" },
      { value: "365 days", label: "In a Loving Home" },
    ],
    beforeImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDf1CcCc0JaZodBIIbSQOVXWmKdwiOV_sm382K179bwBfERrpf1Qiw1GxHw_djbxaRLMBWO4TMByyHFIHvuKfv-lNyVvI5W2P5zHcyYPX8cibvQBgBtEF2i41jnCc3R6p06h4ja18EfKDHpVCeZ7tjySVwCis2M_NG7pqOuW9KtXe7RN8LUMB99hq1prBlDfeTB5b5WXCgl-MxPHvM2mbQ5R8eR8t07Ar-TZdYN0FSxSz8fOafjIlm_eWNq8CAmvGj6H-og_dS1Lf",
    beforeImageAlt: "Stray calico cat hiding under a car",
    beforeCaption:
      "Oliver was found hiding beneath cars on a busy highway interchange — scared, hungry, and invisible. He refused to be approached for weeks.",
    afterImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBOltFL2erIHYRi_vrYv1aC3ahM-c2S_JQDLdj_XRD1l1R6UvSG0K8t-G0lkmuf97qgJgFb_afU3O3m_ZI69vzQUIGOcZwRjIBHirzG_iF88tspv9LsBX_Ft8F6tAXL1bNnEvLWlliedpLx6v395PhkAwoDsSKBdXWjoWmeTzF-YeWdBNmLL32UAV2dYuvoYK6UR7ov528LOPcWxaujq8s0mK0iiJo0YmeijwLSc528rtsXbqdlwET2vegXCfi-V7QgTG0m0eCdEcY",
    afterImageAlt: "Beautiful calico cat sleeping on a soft sofa",
    afterCaption:
      "Now Oliver spends his days choosing whose lap to sit on. He has the loudest purr Sarah has ever heard — she calls it his constant thank you.",
    sectionTitle: "A Ghost Cat No More",
    paragraphs: [
      "Oliver was a 'ghost cat' for weeks — we knew he was there because food disappeared, but he was never seen. Rescued from a high-traffic highway interchange, his spirit was as battered as his body.",
      "It took Sarah two months of sitting quietly on her kitchen floor for Oliver to finally approach her. She would bring a book, make herself small, and simply exist in his space without pressure or demand.",
      "Now he's a professional lap-warmer. He follows Sarah from room to room, always within reach. 'He has the loudest purr I've ever heard,' Sarah says. 'It's like he's constantly thanking me for the quiet life.'",
      "Oliver is proof that some animals just need the right kind of patience — not loudness, not urgency, just quiet, consistent love.",
    ],
    quote:
      "We thought we were giving [name] a home. Turns out, [name] was teaching me everything I needed to know about patience and unconditional love.",
  },
  "3": {
    id: "3",
    slug: "bella",
    name: "Bella",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAB3OA_H8qKegWajaRNQCAd-j29Kv9Gb5ur97yI8rB-XBQQ2jil0TkGOXZ80dVjnXxd1J9S6TcWxfozDw9bajqTMvjoFZrL88xoyAo-Vwuq15gek6itjpb5b4_dAfq65nmujTydHJiFkhPXVN-G7c5JpAAToteOQAgu_opcsXULajxpwbZwMngO4nY-yLxeKVZPmnS37YHCK1kM28uOel_2YndHfwgx7Yztjxo9ioOwQtEDM4tOm9eE8M4RkoeQjgTaDY0KLP5q3SS9",
    heroImageAlt: "Bella the husky smiling happily in a sunny yard",
    tagline: "Age is just a number when love is the language",
    subtitle:
      "Surrendered at 10 years old, Bella waited patiently for the family that would see past her grey muzzle. The Thompsons didn't disappoint.",
    adoptionDate: "June 15, 2023",
    family: "The Thompson Family",
    stats: [
      { value: "10 yrs", label: "Age at Rescue" },
      { value: "Jun '23", label: "Adoption Date" },
      { value: "Senior", label: "Dog Specialist" },
      { value: "∞", label: "Love Given" },
    ],
    beforeImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXMUSZu6rzcGSALcqvKxpaNQosWDT-j7DlS0q5lIPb49OM5eJonv02jJ8Fk9HLSnsoubY9GGZAQgoywa-UjbpgWdelAwNzHCTEs1OqFHR4fXSPEM60PSJ9sJHDThL6jB8DQ4t98IcbIkeaE15tBpiQGsexLzCIxNL0incko2_CaOzlC_vwf0vYseyexgCvimtGFphGFJo9FnEP9yyGtj9vh8BSefHUpL6BgbGfhMa6Fa5E1u-bOiunMasksIRYZrbuJX_L7i9wluoD",
    beforeImageAlt: "Anxious elderly husky dog in a kennel",
    beforeCaption:
      "Bella would sit by her kennel door for hours every day, waiting for a family that wasn't coming back. Senior dogs wait longest, and her sadness was palpable.",
    afterImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAB3OA_H8qKegWajaRNQCAd-j29Kv9Gb5ur97yI8rB-XBQQ2jil0TkGOXZ80dVjnXxd1J9S6TcWxfozDw9bajqTMvjoFZrL88xoyAo-Vwuq15gek6itjpb5b4_dAfq65nmujTydHJiFkhPXVN-G7c5JpAAToteOQAgu_opcsXULajxpwbZwMngO4nY-yLxeKVZPmnS37YHCK1kM28uOel_2YndHfwgx7Yztjxo9ioOwQtEDM4tOm9eE8M4RkoeQjgTaDY0KLP5q3SS9",
    afterImageAlt: "Happy husky dog smiling in a sunny yard",
    afterCaption:
      "Now Bella specializes in gentle snoring during movie nights and slow morning walks. She's thriving and proves that a new beginning has no age limit.",
    sectionTitle: "You're Never Too Old",
    paragraphs: [
      "Bella was surrendered at the age of 10, confused and heartbroken. Senior dogs often wait the longest for homes, and Bella's sadness was palpable. She would sit by her kennel door for hours, waiting for a family that wasn't coming back.",
      "The Thompsons saw past her grey muzzle and the hesitance in her eyes. They had been thinking about a dog for years and wanted to give the longest-waiting resident a chance.",
      "The Thompsons didn't care about her age; they cared about her heart. Today, Bella is thriving on daily slow walks and specializes in 'gentle snoring' during movie nights.",
      "She's proof that you're never too old for a new beginning — and that sometimes the most beautiful love stories start with grey muzzles, slow steps, and a pair of kind eyes.",
    ],
    quote:
      "Age is just a number when love is the language. [name] taught our whole family what it means to live in the present moment.",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(STORIES).map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = STORIES[slug];
  if (!story) return { title: "Story Not Found" };
  return {
    title: `The New Life of ${story.name} | Wild and Free NGO`,
    description: story.subtitle,
  };
}

export default async function SuccessStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = STORIES[slug];

  if (!story) notFound();

  return (
    <main className="font-display bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <Link href="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link>
          <span>›</span>
          <span className="text-slate-600">{story.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <SuccessHero
        name={story.name}
        heroImageUrl={story.heroImageUrl}
        heroImageAlt={story.heroImageAlt}
        tagline={story.tagline}
        subtitle={story.subtitle}
        adoptionDate={story.adoptionDate}
        family={story.family}
        phone={story.phone}
      />

      {/* Stats bar */}
      <SuccessStats stats={story.stats} />

      {/* Transformation before/after */}
      <TransformationSection
        beforeImageUrl={story.beforeImageUrl}
        beforeImageAlt={story.beforeImageAlt}
        beforeCaption={story.beforeCaption}
        afterImageUrl={story.afterImageUrl}
        afterImageAlt={story.afterImageAlt}
        afterCaption={story.afterCaption}
      />

      {/* Narrative */}
      <SuccessStoryNarrative
        sectionTitle={story.sectionTitle}
        paragraphs={story.paragraphs}
      />

      {/* Family quote */}
      <FamilyQuoteSection
        quote={story.quote}
        animalName={story.name}
        familyName={story.family}
        familyAvatarUrl={story.familyAvatarUrl}
      />

      {/* CTA */}
      <SuccessCTA />
    </main>
  );
}
