import SuccessStoryArticleCard from "@/components/SuccessStoryArticleCard";
import Link from "next/link";

export default function SuccessStoriesPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12 font-display">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-slate-900  text-5xl font-black leading-tight tracking-tight mb-4">Happy Endings</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Every animal deserves a second chance. Read the heartwarming journeys of our rescued residents and the wonderful families who opened their hearts.
        </p>
        <div className="mt-6 h-1 w-20 bg-primary rounded-full hidden md:block"></div>
      </div>

      <div className="flex flex-col gap-10">
        <SuccessStoryArticleCard
          title="Luna's New Horizon"
          date="October 12, 2023"
          author="the Miller Family"
          storyParagraphs={[
            "Luna was found shivering in an alleyway, malnourished and terrified of human touch. She spent three months in our rehabilitation program, slowly learning that hands could provide love, not just harm.",
            "Today, she is the heart of the Miller household. \"She doesn't just live here; she owns the place,\" laughs Sarah Miller. Luna now spends her afternoons patrolling the backyard and her evenings curled up at the foot of their daughter's bed."
          ]}
          beforeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC2kSM5to0cXXM5C9somxYDb07b1ufASzD3TNRgYOKXJS_EwBW2bh2mo_lMtEsDL-yNUZNr_0IYqYys8nRVchAcXNLDiR29tnQqIzat1_qDnVp3_y4TJ89mWr5yrAUvzTodcBfdVScW8tMPAijdBGgwFGnNDntBKkfsbS-s0ZQzQM6a_YTnAE4pz4i-eup0P89AoEbk097-l3RbnYGQUuzXrX84ijmFgrWOsK1eIcjHoCRFq1S0F7Koa6Teh4qa9cVIQ2yoMfhlFrmz"
          beforeImageAlt="Scared neglected golden retriever in a shelter"
          afterImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAQYyTFdb9h-GK5RJ3Jxyfweibaolr1qLFGUClWETMm3U-ZLKNX3uSIXnjCPN-fxsvl0K2frZkR8DNukf3XtZqtia9mLuaA0vUP440rVHM49i0g-Qml-P2Z27EyajEkYzBxhnp2d4VMdzZQQv_lsdGX_ce9dg549bsTI1VffrRSpl1Jz12yQ158Toz9ju5qYkD3M7Aoae_xxgOmfzgvt_dzY1Bd8ij5LTHKBdAsgMNoD9WMvOdbkLJmrUJBbAhVkfPSkMTnspqjEEgl"
          afterImageAlt="Happy healthy golden retriever running in a park"
          id="1"
        />

        <SuccessStoryArticleCard
          title="Oliver's Transformation"
          date="August 24, 2023"
          author="Sarah Jenkins"
          storyParagraphs={[
            "Oliver was a 'ghost cat' for weeks—we knew he was there because food disappeared, but he was never seen. Rescued from a high-traffic highway interchange, his spirit was as battered as his body.",
            "It took Sarah two months of sitting quietly on her kitchen floor for Oliver to finally approach her. Now, he's a professional lap-warmer. \"He has the loudest purr I've ever heard,\" Sarah says. \"It's like he's constantly thanking me for the quiet life.\""
          ]}
          beforeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDf1CcCc0JaZodBIIbSQOVXWmKdwiOV_sm382K179bwBfERrpf1Qiw1GxHw_djbxaRLMBWO4TMByyHFIHvuKfv-lNyVvI5W2P5zHcyYPX8cibvQBgBtEF2i41jnCc3R6p06h4ja18EfKDHpVCeZ7tjySVwCis2M_NG7pqOuW9KtXe7RN8LUMB99hq1prBlDfeTB5b5WXCgl-MxPHvM2mbQ5R8eR8t07Ar-TZdYN0FSxSz8fOafjIlm_eWNq8CmGAmvGj6H-og_dS1Lf"
          beforeImageAlt="Stray calico cat hiding under a car"
          afterImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCBOltFL2erIHYRi_vrYv1aC3ahM-c2S_JQDLdj_XRD1l1R6UvSG0K8t-G0lkmuf97qgJgFb_afU3O3m_ZI69vzQUIGOcZwRjIBHirzG_iF88tspv9LsBX_Ft8F6tAXL1bNnEvLWlliedpLx6v395PhkAwoDsSKBdXWjoWmeTzF-YeWdBNmLL32UAV2dYuvoYK6UR7ov528LOPcWxaujq8s0mK0iiJo0YmeijwLSc528rtsXbqdlwET2vegXCfi-V7QgTG0m0eCdEcY"
          afterImageAlt="Beautiful calico cat sleeping on a soft sofa"
          id="2"
          reverse
        />

        <SuccessStoryArticleCard
          title="Bella's Brave Journey"
          date="June 15, 2023"
          author="The Thompson Family"
          storyParagraphs={[
            "Bella was surrendered at the age of 10, confused and heartbroken. Senior dogs often wait the longest for homes, and Bella's sadness was palpable. She would sit by her kennel door for hours, waiting for a family that wasn't coming back.",
            "The Thompsons didn't care about her age; they cared about her heart. Today, Bella is thriving on daily slow walks and specializes in \"gentle snoring\" during movie nights. She's proof that you're never too old for a new beginning."
          ]}
          beforeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMUSZu6rzcGSALcqvKxpaNQosWDT-j7DlS0q5lIPb49OM5eJonv02jJ8Fk9HLSnsoubY9GGZAQgoywa-UjbpgWdelAwNzHCTEs1OqFHR4fXSPEM60PSJ9sJHDThL6jB8DQ4t98IcbIkeaE15tBpiQGsexLzCIxNL0incko2_CaOzlC_vwf0vYseyexgCvimtGFphGFJo9FnEP9yyGtj9vh8BSefHUpL6BgbGfhMa6Fa5E1u-bOiunMasksIRYZrbuJX_L7i9wluoD"
          beforeImageAlt="Anxious elderly husky dog in a kennel"
          afterImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAB3OA_H8qKegWajaRNQCAd-j29Kv9Gb5ur97yI8rB-XBQQ2jil0TkGOXZ80dVjnXxd1J9S6TcWxfozDw9bajqTMvjoFZrL88xoyAo-Vwuq15gek6itjpb5b4_dAfq65nmujTydHJiFkhPXVN-G7c5JpAAToteOQAgu_opcsXULajxpwbZwMngO4nY-yLxeKVZPmnS37YHCK1kM28uOel_2YndHfwgx7Yztjxo9ioOwQtEDM4tOm9eE8M4RkoeQjgTaDY0KLP5q3SS9"
          afterImageAlt="Happy husky dog smiling at the camera in a sunny yard"
          id="3"
        />
      </div>

      <div className="mt-20 p-12 rounded-3xl bg-primary text-center relative overflow-hidden text-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <pattern height="10" id="paw-pattern" patternUnits="userSpaceOnUse" width="10" x="0" y="0">
              <path d="M5,2 Q6,2 6,3 Q6,4 5,4 Q4,4 4,3 Q4,2 5,2 M2,5 Q3,5 3,6 Q3,7 2,7 Q1,7 1,6 Q1,5 2,5 M8,5 Q9,5 9,6 Q9,7 8,7 Q7,7 7,6 Q7,5 8,5 M5,8 Q7,8 7,10 Q5,10 3,10 Q3,8 5,8" fill="currentColor"></path>
            </pattern>
            <rect fill="url(#paw-pattern)" height="100" width="100"></rect>
          </svg>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-4xl font-black mb-4 w-full">Be the Next Success Story</h2>
          <p className="text-xl max-w-xl mx-auto mb-8 font-medium text-black/70">
            There are hundreds of animals still waiting for their forever families. Could you be the one to change a life?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/adopt" className="bg-white hover:bg-slate-100 font-bold py-4 px-10 rounded-2xl transition-all shadow-xl text-black">
              View Adoptable Pets
            </Link>
            <Link href="/donate" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border font-bold py-4 px-10 rounded-2xl transition-all text-black border-black/20">
              Donate to the Rescue
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
