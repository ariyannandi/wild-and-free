import Image from "next/image";

interface AnimalGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export default function AnimalGallery({ images }: AnimalGalleryProps) {
  const mainImage = images[0];
  const sideImages = images.slice(1, 5);
  const remainingCount = images.length - 5;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      {/* Main Hero Image */}
      <div className="md:col-span-2 md:row-span-2 aspect-square overflow-hidden rounded-[32px] shadow-2xl border-4 border-white relative group">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={mainImage?.alt || "Animal portrait"}
          src={mainImage?.url || ""}
          width={800}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Side Images */}
      {sideImages.map((image, index) => {
        const isLastSide = index === 3;
        
        return (
          <div 
            key={index} 
            className="aspect-video md:aspect-square overflow-hidden rounded-[24px] shadow-lg border-2 border-white relative group"
          >
            <Image
              className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${isLastSide && remainingCount > 0 ? "grayscale brightness-50" : ""}`}
              alt={image.alt}
              src={image.url}
              width={400}
              height={400}
            />
            {isLastSide && remainingCount > 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xl cursor-pointer bg-black/40 backdrop-blur-[2px]">
                +{remainingCount}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
