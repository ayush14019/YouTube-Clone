import React, { useEffect, useState } from "react";
import { YOUTUBE_RELATED_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const RelatedVideos = ({ videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  const fetchRelatedVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_RELATED_VIDEOS_API(videoId));
      const data = await response.json();
      // console.log("Related videos fetched:", data);
      if (data.items) {
        setRelatedVideos(data.items);
      }
    } catch (err) {
      console.error("Failed to fetch related videos:", err);
    }
    
  };

  useEffect(() => {
    if (videoId) {
      // console.log("Fetching related videos for ID:", videoId);
      fetchRelatedVideos(); // call only once
    } else {
      console.error("No videoId passed to RelatedVideos component!");
    }
  }, [videoId]);


  return (
    <div className="w-[400px] overflow-y-auto max-h-[650px] p-4">
      <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
      <ul className="space-y-4">
        {relatedVideos.map(({ id, snippet }) => (
          <li
            key={id.videoId}
            className="flex space-x-3 cursor-pointer hover:bg-gray-100 rounded-lg p-2"
          >
            <Link to={`/watch?v=${id.videoId}`} className="flex space-x-3">
              <img
                src={snippet.thumbnails.medium.url}
                alt={snippet.title}
                className="w-36 h-20 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold line-clamp-2 max-w-[220px]">
                  {snippet.title}
                </p>
                <p className="text-xs text-gray-600">{snippet.channelTitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
