'use client'

interface Anime {
  id: number;
  title: string;
  imageUrl: string;
  synopsis: string;
  score: number;
  link: string;
}

const Card: React.FC<{ anime: Anime }> = ({ anime }) => {
  const handleButtonClick = () => {
    if (anime.link) {
      window.location.href = anime.link;
    } else {
      alert("No link available");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-300">
      <div className="relative h-48">
        <img
          src={anime.imageUrl}
          alt={anime.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{anime.title}</h2>
        <p className="text-gray-500 text-sm">{anime.synopsis}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span>{anime.score}</span>
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;