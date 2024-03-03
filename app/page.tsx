import AnimeListCard from "./components/AnimeListCard/AnimeListCard";
import Header from "./components/AnimeListCard/Header";
import { getAnimeResponse } from "./services/api-service";
const Home = async () => {
  const TopAnimes = await getAnimeResponse("top/anime", "limit=8");
  return (
    <>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="md:text-4xl sm:text-3xl text-md font-bold text-center text-white mb-4 typing-animation">
              SELAMAT DATANG DI KB REVIEW
            </h1>
            <p className="md:text-lg text-sm text-center text-white p-4">
              Kami menyediakan ulasan terbaru dan terkini tentang anime, manga,
              dan banyak lagi. Temukan informasi yang Anda butuhkan untuk
              memilih hiburan terbaik untuk Anda!
            </p>
          </div>
        </div>
      </main>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua.."
          linkHref="/populer"
        />
        <AnimeListCard api={TopAnimes} />
      </section>
    </>
  );
};

export default Home;
