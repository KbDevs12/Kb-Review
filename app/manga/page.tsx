import {
  getMangaResponse,
  getNestMangaRecResponse,
} from "@/app/services/api-service";

import MangaList from "../components/MangaList/MangaList";
import Header from "../components/AnimeListCard/Header";
import MangaRecList from "../components/MangaRecList/MangaRecList";


const Page = async () => {
  const shuffleArray = (array: any[]) => {
    const shuffledArray = array.slice(); // Copy array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const TopManga = await getMangaResponse("top/manga", "limit=8");
  let Recommendations = await getNestMangaRecResponse("recommendations/manga");
  Recommendations = shuffleArray(Recommendations);
  Recommendations = { data: Recommendations.slice(0, 8) };
  return (
    <div className="flex-1">
      <h5 className="text-md md:text-3xl pt-3 text-center">Manga List</h5>
      <section>
        <Header
          title={"Manga Terpopuler :"}
          linkHref="/manga/populer"
          linkTitle={"Lihat Semua.."}
        />
        <MangaList Api={TopManga} />
      </section>
      <Header
        title={"Manga Rekomendasi :"}
      />
      <MangaRecList api={Recommendations} />
    </div>
  );
};
export default Page;
