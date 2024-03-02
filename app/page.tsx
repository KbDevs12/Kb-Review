import Card from "./components/card";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import animeData from "./data/animeData";

export default function Home() {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-center text-white mb-4 typing-animation">
              SELAMAT DATANG DI KB REVIEW
            </h1>
            <p className="text-lg text-center text-white">
              Kami menyediakan ulasan terbaru dan terkini tentang anime, manga,
              dan banyak lagi. Temukan informasi yang Anda butuhkan untuk
              memilih hiburan terbaik untuk Anda!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {animeData.map((anime) => (
              <div key={anime.id} className="px-4">
                <Card anime={anime} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
