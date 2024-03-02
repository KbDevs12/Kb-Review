
import animeData from "../data/animeData";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const OnePiecePage = () => {
  const onePiece = animeData.find((anime) => anime.title === "One Piece");

  if (!onePiece) {
    return <p>Anime not found</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <img
            src={onePiece.imageUrl}
            alt={onePiece.title}
            className="w-full sm:w-48 h-auto object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
          />
          <div>
            <h1 className="text-2xl font-bold">{onePiece.title}</h1>
            <p className="text-lg">{onePiece.synopsis}</p>
            <div className="mt-4">
              <h2 className="text-lg font-bold">Review</h2>
              <p className="text-sm">{onePiece.review}</p>
            </div>
            <div className="mt-12">
              <h2 className="text-lg font-bold">Stream Trailer {onePiece.title} Disini:</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${onePiece.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnePiecePage;
