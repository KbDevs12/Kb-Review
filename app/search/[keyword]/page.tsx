import AnimeListCard from "@/app/components/AnimeListCard/AnimeListCard";
import Header from "@/app/components/AnimeListCard/Header";
import { getAnimeResponse } from "../../services/api-service";

const Page = async ({ params }: { params: any }) => {
  const key = params.keyword;
  const titles = decodeURIComponent(params.keyword);
  // const response = await fetch(`${process.env.JIKAN_API}/anime?q=${key}`);
  // const Hasil = await response.json();
  const Hasil = await getAnimeResponse("anime", `q=${key}`);

  return (
    <>
      <section>
        <Header title={`Hasil Pencarian " ${titles} " : `} />
        <AnimeListCard api={Hasil} />
      </section>
    </>
  );
};
export default Page;
