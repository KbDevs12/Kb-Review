"use client";
import Youtube from "react-youtube";
import { useState } from "react";
const VideoPlayer = ({ youtubeId }: { youtubeId: any }) => {
  const [isOpen, setIsOpen] = useState(true);

  const HandleButtonsX = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    height: "250",
    width: "300",
  };
  const Videos = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          className="text-dark float-right bg-hover gap-2 px-2 mb-1 rounded-t-md hover:bg-opacity-50 hover:text-opacity-50"
          onClick={HandleButtonsX}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  const ButtonX = () => {
    return (
      <button
        onClick={HandleButtonsX}
        className=" fixed bottom-5 right-5 w-32 bg-hover text-dark px-1 rounded-md hover:bg-opacity-50 hover:text-opacity-50"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Videos /> : <ButtonX />;
};
export default VideoPlayer;
