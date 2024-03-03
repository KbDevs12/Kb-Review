import VideoPlayer from "@/app/components/VideoPlayer/Vid";
import { getAnimeDetResponse } from "@/app/services/api-service";
import Image from "next/image";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const anime = await getAnimeDetResponse(`anime/${id}`);
  return (
    <>
      <div className=" pt-4 px-2 ">
        <h3 className=" text-md font-bold md:text-2xl">
          {anime.data.title} - {anime.data.type}
        </h3>
      </div>
      <div className="pt-4 px-2 flex flex-row overflow-x-auto rounded gap-2">
        <div className=" bg-dark text-secondary text-center gap-2 pt-1 pb-1 px-2 rounded-md flex-shrink-0">
          <h3>PERINGKAT</h3>
          <p className=" text-center">{anime.data.rank}</p>
        </div>
        <div className=" bg-dark text-secondary text-center gap-2 pt-1 pb-1 px-2 rounded-md flex-shrink-0">
          <h3>SKOR</h3>
          <p className=" text-center">{anime.data.score}</p>
        </div>
        <div className=" bg-dark text-secondary text-center gap-2 pt-1 pb-1 px-2 rounded-md flex-shrink-0">
          <h3>EPISODE</h3>
          <p className=" text-center">{anime.data.episodes}</p>
        </div>
        <div className=" bg-dark text-secondary text-center gap-2 pt-1 pb-1 px-2 rounded-md flex-shrink-0">
          <h3>POPULARITAS</h3>
          <p className=" text-center">{anime.data.popularity}</p>
        </div>
        <div className=" bg-dark text-secondary text-center gap-2 pt-1 pb-1 px-2 rounded-md flex-shrink-0">
          <h3>FAVORIT</h3>
          <p className=" text-center">{anime.data.favorites}</p>
        </div>
      </div>
      <div className=" pt-4 px-2 gap-3 flex sm:flex-nowrap flex-wrap">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={250}
          height={250}
          className=" w-full rounded-md object-cover"
        />
        <p className=" text-justify text-md md:text-xl">
          {anime.data.synopsis}
        </p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default page;
