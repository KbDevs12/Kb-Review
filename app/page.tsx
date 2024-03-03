import AnimeListCard from "./components/AnimeListCard/AnimeListCard";

const Home = async () => {
  const response = await fetch(`${process.env.JIKAN_API}/top/anime?limit=8`);
  const animes = await response.json();

  return (
    <>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="md:text-4xl sm:text-3xl text-lg font-bold text-center text-white mb-4 typing-animation">
              SELAMAT DATANG DI KB REVIEW
            </h1>
            <p className="md:text-lg text-sm text-center text-white font-serif">
              Kami menyediakan ulasan terbaru dan terkini tentang anime, manga,
              dan banyak lagi. Temukan informasi yang Anda butuhkan untuk
              memilih hiburan terbaik untuk Anda!
            </p>
            <p className="text-lg mt-4 text-left text-white font-sans p-4">
              Anime Terpopuler :
            </p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 px-4">
            {animes.data.map((data: any) => {
              return (
                <div key={data.mal_id} className="shadow-xl">
                  <AnimeListCard
                    title={data.title}
                    images={data.images.webp.image_url}
                    episode={data.episodes}
                    type={data.type}
                    id={data.mal_id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
