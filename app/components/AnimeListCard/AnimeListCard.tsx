import Image from "next/image";
import Link from "next/link";

interface AnimeListCardProps {
  api: any;
}

const AnimeListCard = ({ api }: AnimeListCardProps) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 px-4 rounded-md">
      {api.data?.map((anime: any) => {
        return (
          <div
            key={anime.mal_id}
            className="relative overflow-hidden rounded-md hover:shadow-primary hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <Link href={`/${anime.mal_id}`} className="cursor-pointer">
              <Image
                className="rounded-md"
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
              />
              <div className="absolute top-0 left-0 bg-accent text-black font-bold uppercase p-2 rounded-md">
                <span className="hidden sm:inline">{anime.type}</span>
                <span className="sm:hidden text-sm">{anime.type}</span>
              </div>
              <div className="absolute top-0 right-0 bg-accent text-black p-2 rounded-md">
                <span className="hidden sm:inline">
                  Episodes: {anime.episodes}
                </span>
                <span className="sm:hidden text-sm">Ep: {anime.episodes}</span>
              </div>
              <h3 className="text-white text-center p-1">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeListCard;
