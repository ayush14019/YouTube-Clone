import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import VideoDetails from "./VideoDetails";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  // Local state to control LiveChat visibility
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Close menu on page load
    dispatch(closeMenu());

    // Show LiveChat only on screens >= 768px
    if (window.innerWidth >= 768) setShowChat(true);

    // Optional: handle window resize
    const handleResize = () => setShowChat(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row md:px-5 md:py-5 gap-4 w-full">
      {/* Left Side - Video, Details, Comments */}
      <div className="flex flex-col flex-1">
        {/* Video Player */}
        <div className="w-full items-center px-2 md:px-0 py-2">
          <div className="w-full max-w-[380px] md:max-w-none">
            <iframe
              className="w-full aspect-video rounded-lg md:rounded-3xl"
              src={`https://www.youtube-nocookie.com/embed/${searchParams.get(
                "v"
              )}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video Details */}
        <div className="mt-2 md:mt-4 px-3 md:px-0 max-w-[380px] md:max-w-none break-words overflow-wrap-anywhere">
          <VideoDetails videoId={searchParams.get("v")} />
        </div>

        {/* Comments */}
        <div className="mt-2 md:mt-4 px-3 md:px-0 max-w-[380px] md:max-w-none break-words overflow-wrap-anywhere">
          <CommentContainer videoId={searchParams.get("v")} />
        </div>
      </div>

      {/* Right Side - Live Chat (Desktop Only) */}
      {showChat && (
        <div className="w-full md:w-[400px] lg:w-[450px] flex-shrink-0">
          <LiveChat />
        </div>
      )}
    </div>
  );
};

export default WatchPage;
