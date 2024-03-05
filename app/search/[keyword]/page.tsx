import AnimeListCard from "@/app/components/AnimeListCard/AnimeListCard";
import Header from "@/app/components/AnimeListCard/Header";
import { getAnimeResponse } from "../../services/api-service";

const Page = async ({ params }: { params: any }) => {
  const key = params.keyword;
  const titles = decodeURIComponent(params.keyword);

  const Hasil = await getAnimeResponse("anime", `q=${key}`);
  return (
    <>
      <Header title={`Hasil Pencarian ${titles} :`} />
      <AnimeListCard api={Hasil} />
    </>
  );
};

export default Page;
