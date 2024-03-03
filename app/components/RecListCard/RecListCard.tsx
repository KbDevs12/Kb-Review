import Image from "next/image";
import Link from "next/link";

interface AnimeListCardProps {
  api: any;
}

const RecListCard = ({ api }: AnimeListCardProps) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 px-4 rounded-md">
      {api.data?.map((anime: any, index: number) => {
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-md hover:shadow-primary hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
              <Image
                className="rounded-md"
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
              />
              <h3 className="text-white text-center p-1">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecListCard;
