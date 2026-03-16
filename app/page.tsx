import HeroSection from "@/components/HeroSection";
import RescueCard from "@/components/RescueCard";
import AnimalCard from "@/components/AnimalCard";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Latest Rescues */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Latest Rescues</h2>
            <div className="h-1.5 w-20 bg-primary mt-2"></div>
          </div>
          <Link href="/rescues" className="text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors">
            View All Rescues <span className="material-symbols-outlined text-sm"><ArrowRight /></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RescueCard
            name="Luna"
            date="Oct 12, 2023"
            description="Luna was found wandering the city streets during a storm. After a month of recovery, she's finding her voice again."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAxx8Ei1djm9Pf8osKEvGzB_p738gDhf2Oa3_xj3rlFAIB-hRN1QpU12CUmiRhxPDDwqd7X5rySf86JiT6STu7CqMiCD9vy_dHoldsw0VoN67vXWy94XooqPzWr5kcyn-PmAWD2mYF2GfQOisOyiUZoXmn7PrXENyUBDm-BTVGLyG71VckDf1hk8lvEilluPwNfoIpEhKK15Vxlw5nMFp7DjSNIPRraNy98FVGI9PUcYzBsk1Ooe9eE4_eRlMc-O7jPOcrvVo75gqXN"
            imageAlt="Rescue cat named Luna looking through window"
            id="1"
          />
          <RescueCard
            name="Max"
            date="Nov 05, 2023"
            description="Max was rescued from an abandoned industrial site. Despite his rough start, he is the friendliest soul we've met."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCGDmnC4oNFN9hVAWIX0SdlpFJz_dW6quMydzHkJp0Gzi5-aYQ6vEAUT4CfjhNxt6hX1-x8MsqeHOHk5jRun6AX07zkg4iOmjhUjYovHkfniU3LK6QqRTZVgOw8HBuSearmaOAgEB0JCOUBJN-AVg2IxNdwjvZXy54mWlBpSM70kX5S08CZ_lvAsHz1mw4KZgcvHTmW_F-W8tSHSfKQr2X8W588aahgaSKBH8cxuc2HOgjIEEhighKK_E9yO2cQwx0EKdBEJu4MyA95"
            imageAlt="Rescued golden retriever named Max playing"
            id="2"
          />
          <RescueCard
            name="Oliver"
            date="Dec 01, 2023"
            description="Oliver is a brave kitten who survived against all odds. His curiosity and playful energy are truly infectious."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXVcuu81xDT0-tHljMcTIOsXxQdKIuSQ4FjsqvWVBR2gvBV9wRbM-Qdvsm7OtsQWtqJ_GU6PuPV9uPvz44KR9cu-jU_EpywSACmvquWKZrRD1zaMZMDZQEorv21sl27TUuKaIRGUEQTvVeI72V_J5osKS7ly5DMw524jH9jvx9GpXNBwIA_tDjhQnxONm8E46dDiCsxxJJWgigkPfjczTCVqLpCFmEN5srf78fM8T1Sq3I-UwZkYaHAz7vJKOVJ2QemL0ZtFOyMVb"
            imageAlt="Small kitten Oliver sleeping peacefully"
            id="3"
          />
        </div>
      </section>

      {/* Available for Adoption */}
      <section className="bg-primary/5 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Find Your Best Friend</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">These lovely souls are waiting for their forever homes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimalCard
              name="Daisy"
              type="DOG"
              breed="Border Collie"
              age="2 Years"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDTE57OmGcZHJUHuFj-BDyPsUxowCVrPAu6xNDjkrB6a651AF2IJbywC54_0MekJo4W-qHZXtK5BocgN_h6o3hRSf25v3ubFydvyFwu1IulSbdnYPzQl716dei5S4u_0K_8q35805JELC15NBOovlhl8mz2pk7_zLlZumTy18MW1RndugD4QH9QL9FM8pX46_-u9mi0F-7ZMbA00g0g0EvlDQ81Why0gsKrr4rIQPZNQzw0g4xay8LLBoiYFi2chgHSia-jhb3Fn2OE"
              imageAlt="Portrait of a friendly border collie"
              id="1"
            />
            <AnimalCard
              name="Milo"
              type="CAT"
              breed="Tabby"
              age="5 Months"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCRMwFZTsvPVkdaC1EelOi7v1LApqIi8G9Dnvly0PxgSE7jZMyH3QZNNHWmKT6NXE4U7zWTbM9-eRl0orWmVTPMQgIHd0D2Nv-QJqHdHEQWCqNiiXWxeP403suQItl0Impydus-L_Vs6Z2Y4kRgki_bRlqiuXmfoaQLkOAlwaoY_I0XY6Ddij4t517dECiL1Wa3Zlpe480NPMvxTTtPhYbPtN-taHfj9Wt7wxosHB6AkvhEtJgXOXUW_08jtd2BCRRryWpcvgWWIVCC"
              imageAlt="Ginger tabby cat sitting elegantly"
              id="2"
            />
            <AnimalCard
              name="Bear"
              type="DOG"
              breed="Labrador Mix"
              age="1 Year"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAi9_8H5QLGMRHdmqvEG6uM0GHsJ0vSPF16Bh3ii29GC4DM8Z14m3t2g1953Aop7-Cr8VyjGY9j9ymt2PZIU7tKa6iwQKd7CDShCeHwdjPMdYb6n0ywWcPGDyKCGOoBNpn63CMlkPc_yMBUvYYsQh4LWIJfWyP2aEbPUezlYutYilm6d1I5ZdJwe8IONWJt-W8SlLFwJs-vGbHsrR8C8AmT7942OyJ-hV94uoFSfMbVCYzwj_j_bPqMQc0VLIPFa-9wbmCspNa5jsC6"
              imageAlt="Labrador puppy with expressive eyes"
              id="3"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight">Success Stories</h2>
          <p className="text-slate-500">From survival to thriving in loving homes.</p>
        </div>

        <SuccessStoryCard
          title="Charlie's Journey"
          quote="Charlie went from a frightened stray to the king of our couch. He brings so much joy to our family every single day. Thank you Wild & Free for saving him."
          author="The Henderson Family"
          beforeImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDo4OS8Qv70n-m_dY2oY1ZaO-C1eOYUoM2TPec8o4nEoZ1bP7ZMAnCAY33g6eJyGaqZNawu6OtW4lwrCCc2LSkHytmzN_LXpfWORxRHQxTNnOR1qhzJgjS_0vdXd-HK_nYyyCL82Pm2YBHWYN3N241DbSbfF49QwRpdZchSlpw1MRbniJIML_1T8n8i3vIRtNqNF7dfOLvW6CjByJSAPYWCskKxV9ybvQshGb34-FRImSkpcg7k00ivgbQm9J0oaHEzhnvC2OXc1nUQ"
          beforeImageAlt="Dog before rescue looking thin and tired"
          afterImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDU2LcXyHNfRLi8qalkfyZx-qae90raNwN8S8giXlv8u9yoPZGHTsnFmkh7ruE-QttlJByP_FSI-em48LWNBXPLHoGrDpXleLD3r-3S0JNgNWM4PR7eEpQR9nLhNTrSknqBk63airVLgF9D-qr4wjIj73ugtdQyNooYOmcAW7tt6MOh6A6UVAc1-BAzFRMBgDBZ0b23R2ENDZB4D4pvF9LrxPTevi4hv5b7Ogv_Pw3td_1xlZlR4sjwbHGWubPS7-QE5pou8lWsYzd6"
          afterImageAlt="Same dog happy and healthy in a home"
        />
      </section>

      {/* Blog Preview */}
      <section className="bg-white  py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Latest from Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="5 Tips for First-Time Pet Owners"
              excerpt="Bringing a new pet home is exciting, but it requires preparation. Here's everything you need to know about the first week..."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5ZeIkNMksRFBs_rUGhTcrs7ULOztxRW2Zu3T79jsNIQWyOpDRboG7RlkHD6HJSuZZIfDyAtoN6FbjBVBEmfbDN2LaI7FvB1VVdugrivJwRE_hogHv0zrJfyp5657QnZaSi3Jh4_cpwlRSw8gSQuvXJYUQrP8QYH5llVenzDW-h0UE4kOUp5jlqJ11jdNKts2ScHlFL2SXHIWuiGeccHqzOGpMab4meB7xRS1fwWsY0AVRUSWCwMmpa8r-db48KwnAvTSl97kdNC0"
              imageAlt="Hands petting a dog outdoor"
              slug="first-time-pet-owners"
            />
            <BlogCard
              title="Understanding Your Dog's Body Language"
              excerpt="Communication is key to a healthy relationship with your dog. Learn what that tail wag or ear position really means..."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwD2Ts-ecI18mn52yTIgFIOHSbRZc80ZV53bX9l-SulYaNQauN__6TJ2dMNM1Z14ZVoG3_r9obX3sur4iK-lvleMpbcznEKoXpIbX6axbE_TA6noGly3isBDFlz7iV2fYDgFLrXKXBe9gUGWWFQ9MJi-Mcx5Vuvn0RCUh_01pQwTcb4KToAJBmFDlcUrTrHu-cOe6fHqp_iG2B3sJCFGmhkrwwtXkZAdsqhX6KL_W--G_dMLY-sMOyFLzQpXgw10mwLrayLRbuw4a"
              imageAlt="Dog running in the park"
              slug="dog-body-language"
            />
            <BlogCard
              title="Why Volunteering Matters"
              excerpt="It's not just about the animals; it's about the community. Discover the mental health benefits of spending time with rescues..."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBD6yOscQKT9WAedP9--88NfvQc0pPHdcUlJ5jDuCNM3_nAc3Eo6ElWRhIHxvQey4JfKjfaP0C3oB2Fj50iI7wSq7C7GGrRdxYXv8rCoWOS8_nd1taB1JPAm7A_n_SMTQAEEWelU-pZGsbvIQJP5qatrs3m7H9Zb9WEbIifQYjJl76NyUG-qGu300YCy86dqCcKoq5Vs5kGLnn7ghTBynS_wt8ypObTQH9hw-Pjhg-qqDI79WFB6xMF_7cpejg4o-cdhQRcHSJjh9ll"
              imageAlt="Group of volunteers working together"
              slug="why-volunteering-matters"
            />
          </div>
        </div>
      </section>

      {/* Volunteer CTA Banner */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative bg-black rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-full">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">Become a <span className="text-primary">Voice</span> for the Voiceless</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Whether it's walking dogs, cleaning shelters, or helping with social media, every hour you donate helps save lives.
            </p>
            <Link
              href="/volunteer"
              className="inline-block bg-primary text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
