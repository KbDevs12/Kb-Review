import Image from "next/image";
import Link from "next/link";

interface MangaListProp {
  Api: any;
}
const MangaList = ({ Api }: MangaListProp) => {
  return (
    <main className="grid md:grid-cols-4 grid-cols-2 gap-5 px-4 pt-5 rounded-md">
      {Api.data?.map((manga: any, index: number) => {
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
              <div className="absolute top-0 left-0 bg-accent text-black font-bold uppercase p-2 rounded-md">
                <span className="hidden sm:inline">{manga.type}</span>
                <span className="sm:hidden text-sm">{manga.type}</span>
              </div>
              <div className="absolute top-0 right-0 bg-accent text-black p-2 rounded-md">
                <span className="hidden sm:inline">
                  Chapters: {manga.chapters}
                </span>
                <span className="sm:hidden text-sm">Ep: {manga.chapters}</span>
              </div>
              <h3 className="text-white text-center p-1">{manga.title}</h3>
            </Link>
          </div>
        )
      })}
    </main>
  );
};
export default MangaList;
