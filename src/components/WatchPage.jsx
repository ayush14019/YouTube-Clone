import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import VideoDetails from "./VideoDetails";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // 
  return (
    <div className="w-[400px] min-md:w-full   flex flex-col md:flex-row  px-3 md:p-5 gap-4">
      {/* Left Side - Video, Details, Comments */}
      <div className="flex flex-col flex-1">
        {/* Video Player */}
        <div className="w-full max-w-[430px] md:max-w-none">
          <iframe
            className="w-full aspect-video rounded-xl md:rounded-3xl"
            src={`https://www.youtube-nocookie.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details */}
        <div className=" mt-2 md:mt-4">
          <VideoDetails videoId={searchParams.get("v")} />
        </div>

        {/* Comments */}
        <div className="mt-2 md:mt-4">
          <CommentContainer videoId={searchParams.get("v")} />
        </div>
      </div>

      {/* Right Side - Live Chat (Desktop Only) */}
      <div className="hidden md:block md:w-[400px] lg:w-[450px]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;


