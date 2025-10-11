import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEO_KEY,
  YOUTUBE_VIDEO_DETAILS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchQuery = useSelector((state) => state.app.searchQuery);

  useEffect(() => {
    if (searchQuery) {
      getSearchResults();
    } else {
      getVideos();
    }
  }, [searchQuery]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_KEY);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  const getSearchResults = async () => {
    try {
      setVideos([]); // Show shimmer while loading

      // Step 1: Get search results (video IDs)
    
      const searchData = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
      const searchJson = await searchData.json();
      const searchItems = searchJson.items || [];

      // Step 2: Extract video IDs
      const videoIds = searchItems
        .map((item) => item.id.videoId)
        .filter(Boolean)
        .join(",");

      if (!videoIds) {
        setVideos([]);
        return;
      }

      // Step 3: Fetch full video details (including statistics/views)
      const detailsData = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoIds);
      const detailsJson = await detailsData.json();

      setVideos(detailsJson.items || []);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    }
  };

  return (
    <div className=" mx-7 md:p-5 md:py-5">
      {videos.length > 0 ? (
        <div className="gap-4 md:mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:gap-10">
          {videos.map((video) => (
            <Link
              key={video.id.videoId || video.id}
              to={"/watch?v=" + (video.id.videoId || video.id)}
            >
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="md:mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:gap-10">
          {Array(9)
            .fill("")
            .map((_, i) => (
              <ShimmerCard key={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;






