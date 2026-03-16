import Image from "next/image";
import Link from "next/link";

interface RescueGalleryProps {
  mainImageUrl: string;
  mainImageAlt: string;
  galleryImages?: { url: string; alt: string }[];
}

export default function RescueGallery({ mainImageUrl, mainImageAlt, galleryImages = [] }: RescueGalleryProps) {
  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
        <Image className="object-cover" alt={mainImageAlt} src={mainImageUrl} fill />
        <span className="absolute bottom-4 left-4 bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          After Recovery
        </span>
      </div>
      {/* Thumbnail grid */}
      {galleryImages.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image className="object-cover" alt={img.alt} src={img.url} fill />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
