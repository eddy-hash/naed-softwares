import Image from "next/image";

const POSTERS: Record<string, string> = {
  pos: "/projects/pos/cover.png",
  expense: "/projects/expense/cover.jpg",
  school: "/projects/school/cover.jpg",
  ecommerce: "/projects/ecommerce/cover.jpg",
};

export default function ProjectPoster({ slug }: { slug: string }) {
  const src = POSTERS[slug];

  if (!src) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/20 text-muted-foreground text-xs font-mono">
        No poster
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={85}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}