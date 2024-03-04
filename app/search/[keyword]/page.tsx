import AnimeListCard from "@/app/components/AnimeListCard/AnimeListCard";
import Header from "@/app/components/AnimeListCard/Header";
import { getAnimeResponse } from "../../services/api-service";

const Page = async ({ params }: { params: any }) => {
  const key = params.keyword;
  const titles = decodeURIComponent(params.keyword);

  const Hasil = await getAnimeResponse("anime", `q=${key}`);

  if (!Hasil || !Hasil.results || Hasil.results.length === 0) {
    // Jika hasil pencarian kosong, tampilkan pesan
    return (
      <>
        <Header title={`Hasil Pencarian "${titles}":`} />
        <p className="text-center text-md md:text-2xl">
          Tidak ada anime bernama "{titles}"
        </p>
      </>
    );
  }

  // Jika ada hasil pencarian, tampilkan list anime
  return (
    <>
      <Header title={`Hasil Pencarian "${titles}":`} />
      <AnimeListCard api={Hasil} />
    </>
  );
};

export default Page;
