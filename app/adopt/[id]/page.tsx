import AnimalGallery from "@/components/AnimalGallery";
import AnimalProfileHeader from "@/components/AnimalProfileHeader";
import AnimalQuickFactsCard from "@/components/AnimalQuickFactsCard";
import AnimalStorySection from "@/components/AnimalStorySection";
import AdoptionRequirements from "@/components/AdoptionRequirements";
import AdoptionInquiryForm from "@/components/AdoptionInquiryForm";
import LocationCard from "@/components/LocationCard";

export default async function AnimalDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Normalized mock data based on "Cooper" profile
  const animal = {
    id: id,
    name: "Cooper",
    breed: "Golden Retriever Mix",
    age: "2 Years Old",
    gender: "Male",
    rescueDate: "Oct 12, 2023",
    location: "Seattle Sanctuary",
    medicalStatus: "Fully Vaccinated",
    behavior: "High Energy / Family Friendly",
    story: [
      "Cooper was found wandering near a local park, looking lost but never losing his wagging tail. Despite his rough start, his spirit remains unbroken. He is the personification of joy—a sunbeam in dog form.",
      "At two years old, Cooper is in the prime of his life. He loves long hikes, playing fetch until your arm gets tired, and somehow finding the only puddle within a five-mile radius. He's incredibly intelligent and has already mastered 'sit', 'stay', and 'paw'.",
      "What makes Cooper truly special is his emotional intelligence. If he senses you're having a bad day, he'll rest his heavy golden head on your lap and look at you with eyes that say, \"It's okay, I'm here.\"",
    ],
    requirements: [
      "Fenced-in yard required for high energy safety.",
      "Daily active exercise (60+ minutes recommended).",
      "Owners who are home during the day.",
      "Committed to ongoing positive reward training.",
    ],
    quickFacts: {
      energyLevel: "Olympic Level",
      goodWithKids: "Yes, Ages 5+",
      health: "Up to Date + Neutered",
      houseTrained: "Fully Trained",
      adoptionFee: "$350 USD",
    },
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqX897OswKr2dk_Up0cVDKfB1jgVbF1M38-JpY574oYBctEY3H_tlQLBqnn4MPD83ye8rHJHewHWMZnQJnMI9MNzHm3fhoK9I5M4Q-ZqP9Y68qBQOT61oyCx00iTSkfYArQ6XNJY6IvvgVWQilCbw5EdfI6iHVzBP0-P1XcgjULOgStsOvAOQDVLWs4JXLRV4WBUDKIk2RrFVN4K_hx0ncwIrY-4AG1Zng7fwmpcFfvmmIZLEiLPC4YLDjFcLSJMF8m2nBpuWhy7MZ",
        alt: "Cooper posing nicely",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2FdpGcpCSGreC1FLthm31tcudYtt6HDC2_IqzhDKVvC3Li_AnsTCpjrVmpUrwRTf8-3b9qJ56E17s_DNIwnsxYIcTMW7UHTATDPr6S7XVObYulSGO2TEqmFpCINOCpJDVzRqSyZSZAxaX4UAfbQRu6mPInIWGMByCVdNrqEcASakHaVpSxPrXd-r8l781KYc21iQYL0bCyYe5Unm3X3AazGHKNzvf5DNWtWZnKv4zRhNOgSgZFnKVbsmjemYBH1aVm2atRkapL2UN",
        alt: "Cooper running in grass",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFiyYENp66I3N_6so6V332JZWlbQBbJDsX1OlH2E3XxIrl7Ebkq-iz_bwCp5QzpOooMbCh4WuzIhBGaSBi07zew3kDHvx8MX1FIGQXz51vcJL77oDsaHfOnz2G8_rdQcmfelj0OPWGpsJHys96fxeSx5Zzviyza8jixvzmAs538ToLuDD-JNqo4NfVcD_Qtr_ekTUW2Yx1j8zMIJt-jiCXFLcZetgNulsXfLF79DihV2NME4hB8aDYVUkIAJAus-FZ0v3j1ZlWUzzi",
        alt: "Cooper smiling",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHZLmJ51byFVV2aLIKK4BgM_w7yojQKw9yFX3LmRxEc7FRfm3tEWC8szH5dqwng01blOJNL8rlxV1dhUn8iLLUfkyZrxw2bLZLg2MwIPc_pkP63dcPKxXu_-4kXN3aFH_ouR88CTn7_3SxFcFTBiB3kQW7yKz1TZWsgT2v55Ty0ZUQt_TAXR-qO_8wgEyl0-_S7RiAfc84-SfJhKE5zuY1z71DPxwrzzTswe7gQ-_N8i7RE2ye3vv-ceb6n8_qpq9FNUwpLzP0TS9O",
        alt: "Cooper's golden fur",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcXz5UmkX0CyYH7tsVltcLc5oQhsyO2UHlu9XVZsmOX8vHVU5MUEwtbsM8_0DWpJSn1XZfVlkBw_uL1v6ziuqZ5kcwWtyzQyUoHKQvrPdj60g-xwGWLHhp7BYNpiqcxPmQxBjuBFtXwYZX3OAnWWkoCmm-ksr850-8s43glcyKf27QVcw5wL6DCghZo-DBWafm_zp08RY436s9XWO0urNY9_qVE8PymW3qCnLauT2Qo-45aScHhrgsp8-Vhwh0osbyutdOX7ET66-U",
        alt: "Cooper taking a nap",
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <AnimalGallery images={animal.images} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left Column: Detailed Info & Story */}
          <div className="lg:col-span-2 space-y-20">
            <AnimalProfileHeader 
               name={animal.name}
               breed={animal.breed}
               age={animal.age}
               gender={animal.gender}
               rescueDate={animal.rescueDate}
               location={animal.location}
               medicalStatus={animal.medicalStatus}
               behavior={animal.behavior}
            />
            
            <AnimalStorySection name={animal.name} story={animal.story} />
            
            <AdoptionRequirements requirements={animal.requirements} />
          </div>

          {/* Right Column: Quick Facts & Sidebar */}
          <div className="space-y-10">
            <div className="sticky top-28 space-y-10">
              <AnimalQuickFactsCard {...animal.quickFacts} />
              <LocationCard locationText={animal.location} />
            </div>
          </div>
        </div>

        <AdoptionInquiryForm animalId={id} animalName={animal.name} />
      </div>
    </main>
  );
}
