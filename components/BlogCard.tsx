import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
}

export default function BlogCard({ slug, title, excerpt, imageUrl, imageAlt }: BlogCardProps) {
  return (
    <article className="cursor-pointer group bg-black rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 flex flex-col h-full">
      <Link href={`/blog/${slug}`} className="block relative w-full h-48 mb-4 overflow-hidden ">
        <Image
          className="object-cover group-hover:brightness-75 transition-all"
          alt={imageAlt}
          src={imageUrl}
          fill
        />
      </Link>
      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h4 className="text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer">
            {title}
          </h4>
        </Link>
        <p className="text-sm text-slate-500 mt-3 line-clamp-2 pb-4">
          {excerpt}
        </p>

      </div>

    </article>
  );
}
