import AnimeListCard from "@/app/components/AnimeListCard/AnimeListCard";
import Header from "@/app/components/AnimeListCard/Header";
import { getAnimeResponse, getMangaResponse } from "../../services/api-service";
import MangaList from "@/app/components/MangaList/MangaList";

const Page = async ({ params }: { params: any }) => {
  const key = params.keyword;
  const titles = decodeURIComponent(params.keyword);

  const Hasil = await getAnimeResponse("anime", `q=${key}`);
  const HasilManga = await getMangaResponse("manga",`q=${key}`)
  return (
    <>
      <Header title={`Hasil Pencarian ${titles} :`} />
      <p className="px-4 pt-2 pb-4 text-md md:text-xl">Anime : </p>
      <AnimeListCard api={Hasil} />
      <p className="px-4 pt-2 pb-4 text-md md:text-xl">Manga :</p>
      <MangaList Api={HasilManga}/>
    </>
  );
};

export default Page;
