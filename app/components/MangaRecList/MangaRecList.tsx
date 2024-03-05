import Image from "next/image";
import Link from "next/link";

interface AnimeListCardProps {
  api: any;
}

const MangaRecList = ({ api }: AnimeListCardProps) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 px-4 rounded-md">
      {api.data?.map((manga: any, index: number) => {
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-md hover:shadow-primary hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <Link href={`/manga/${manga.mal_id}`} className="cursor-pointer">
              <Image
                className="rounded-md"
                src={manga.images.webp.image_url}
                alt={manga.title}
                width={350}
                height={350}
              />
              <h3 className="text-accent2 font-semibold text-center absolute bottom-0 left-0 right-0 bg-dark bg-opacity-70 p-2">{manga.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MangaRecList;
