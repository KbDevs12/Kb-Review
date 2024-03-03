import AnimeListCard from "./components/AnimeListCard/AnimeListCard";
import Header from "./components/AnimeListCard/Header";
import RecListCard from "./components/RecListCard/RecListCard";

import {
  getAnimeResponse,
  getNestAnimeRecResponse,
} from "./services/api-service";

const shuffleArray = (array: any[]) => {
  const shuffledArray = array.slice(); // Copy array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
const Home = async () => {
  const TopAnimes = await getAnimeResponse("/top/anime", "limit=8");
  let Recommendations = await getNestAnimeRecResponse(
    "recommendations/anime",
    "entry"
  );
  Recommendations = shuffleArray(Recommendations);
  Recommendations = { data: Recommendations.slice(0, 8) };

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
      <section>
        <Header title="Rekomendasi :" />
        <RecListCard api={Recommendations} />
      </section>
    </>
  );
};

export default Home;
