import Card from "./components/card";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  const animeData: Anime[] = [
    {
      id: "1",
      title: "Naruto",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1203378913951219784/1213415628610867220/naruto.webp?ex=65f5645e&is=65e2ef5e&hm=bc38e0a7aeeff404effa5dfb73fa53fd04921fdc172b513363424e286ae23878&",
      synopsis: "Cerita tentang seorang ninja bernama Naruto Uzumaki.",
      score: 8.6,
      link: "/login",
    },
    {
      id: 2,
      title: "One Piece",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1203378913951219784/1213482335773790309/one-piece.webp?ex=65f5a27e&is=65e32d7e&hm=911f0d6e25387f66d894ad21f16a619f00db6d2929f1d7b33530709ba266daa8&",
      synopsis: "Cerita tentang petualangan bajak laut Topi Jerami.",
      score: 9.0,
      link: "/",
    },
  ];

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
