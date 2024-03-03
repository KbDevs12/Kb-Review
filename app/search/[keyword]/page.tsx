import AnimeListCard from "@/app/components/AnimeListCard/AnimeListCard";
import Header from "@/app/components/AnimeListCard/Header";

const Page = async ({ params }: { params: any }) => {
  const key = params.keyword;
  const titles = decodeURIComponent(params.keyword);
  const response = await fetch(`${process.env.JIKAN_API}/anime?q=${key}`);
  const Hasil = await response.json();

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
