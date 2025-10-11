// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_DETAIL_URL } from "../utils/constants";
// import { FaThumbsUp, FaShare, FaDownload } from "react-icons/fa";
// import { MdSubscriptions } from "react-icons/md";
// import { FiScissors } from "react-icons/fi";

// const VideoDetails = ({ videoId }) => {
//   const [video, setVideo] = useState(null);

//   const fetchVideoDetails = async () => {
//     try {
//       const response = await fetch(YOUTUBE_VIDEO_DETAIL_URL(videoId));
//       const data = await response.json();
//       if (data.items.length > 0) {
//         const item = data.items[0];
//         setVideo({
//           title: item.snippet.title,
//           channelTitle: item.snippet.channelTitle,
//           description: item.snippet.description,
//           publishedAt: item.snippet.publishedAt,
//           viewCount: item.statistics.viewCount,
//           likeCount: item.statistics.likeCount,
//           hashtags: item.snippet.tags?.slice(0, 3), // first 3 tags as hashtags
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch video details:", err);
//     }
//   };

//   useEffect(() => {
//     if (videoId) {
//       fetchVideoDetails();
//     }
//   }, [videoId]);

//   if (!video)
//     return <div className="text-gray-500">Loading video details...</div>;

//   return (
//     <div className="px-7 py-3 w-[850px] text-gray-900">
//       {/* Title */}
//       <h1 className="text-xl font-semibold">{video.title}</h1>

//       {/* Channel and Action Row */}
//       <div className="flex justify-between items-center mt-4">
//         {/* Channel Info */}
//         <div className="flex items-center space-x-4">
//           {/* Placeholder avatar */}
//           <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
//             {video.channelTitle.charAt(0)}
//           </div>
//           <div>
//             <p className="font-medium">{video.channelTitle}</p>
//             <p className="text-sm text-gray-600">23M subscribers</p>{" "}
//             {/* Static, unless you fetch channel info */}
//           </div>
//           <button className="ml-4 flex items-center space-x-1 px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800">
//             <MdSubscriptions size={20} />
//             <span>Subscribe</span>
//           </button>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-3">
//           <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
//             <FaThumbsUp size={18} />
//             <span>{Number(video.likeCount).toLocaleString()}</span>
//           </button>
//           <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
//             <FaShare size={18} />
//             <span>Share</span>
//           </button>
//           <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
//             <FaDownload size={18} />
//             <span>Download</span>
//           </button>
//           <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
//             <FiScissors size={18} />
//             <span>Clip</span>
//           </button>
//         </div>
//       </div>

//       {/* Views, Date, Hashtags */}
//       <div className="text-sm text-gray-700 mt-4">
//         <span className="font-semibold">
//           {Number(video.viewCount).toLocaleString()}
//         </span>{" "}
//         views • {new Date(video.publishedAt).toLocaleDateString()}
//         <div className="mt-2 space-x-2">
//           {video.hashtags?.map((tag, idx) => (
//             <span
//               key={idx}
//               className="text-blue-600 cursor-pointer hover:underline"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mt-3 text-sm text-gray-800 whitespace-pre-line line-clamp-3 hover:line-clamp-none transition-all duration-300 cursor-pointer">
//         {video.description}
//       </div>
//     </div>
//   );
// };

// export default VideoDetails;


import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAIL_URL } from "../utils/constants";
import { FaThumbsUp, FaShare, FaDownload } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FiScissors } from "react-icons/fi";

const VideoDetails = ({ videoId }) => {
  const [video, setVideo] = useState(null);

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_DETAIL_URL(videoId));
      const data = await response.json();
      if (data.items.length > 0) {
        const item = data.items[0];
        setVideo({
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          viewCount: item.statistics.viewCount,
          likeCount: item.statistics.likeCount,
          hashtags: item.snippet.tags?.slice(0, 3),
        });
      }
    } catch (err) {
      console.error("Failed to fetch video details:", err);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId]);

  if (!video)
    return <div className="text-gray-500">Loading video details...</div>;

  return (
    <div className="px-2 md:px-7 py-3 w-full md:w-[850px] text-gray-900">
      {/* Title */}
      <h1 className="text-base md:text-xl font-semibold break-words">
        {video.title}
      </h1>

      {/* Channel and Action Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-3 md:gap-0">
        {/* Channel Info */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Placeholder avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {video.channelTitle.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-medium truncate">{video.channelTitle}</p>
            <p className="text-xs md:text-sm text-gray-600">23M subscribers</p>
          </div>
          <button className="flex items-center space-x-1 px-3 md:px-4 py-2 bg-black text-white rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 whitespace-nowrap">
            <MdSubscriptions size={18} className="md:block" />
            <span>Subscribe</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 md:space-x-3">
          <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            <FaThumbsUp size={16} className="md:w-[18px] md:h-[18px]" />
            <span className="hidden sm:inline">
              {Number(video.likeCount).toLocaleString()}
            </span>
            <span className="sm:hidden">
              {(Number(video.likeCount) / 1000).toFixed(0)}K
            </span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            <FaShare size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            <FaDownload size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Download</span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            <FiScissors size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Clip</span>
          </button>
        </div>
      </div>

      {/* Views, Date, Hashtags */}
      <div className="text-xs md:text-sm text-gray-700 mt-4">
        <span className="font-semibold">
          {Number(video.viewCount).toLocaleString()}
        </span>{" "}
        views • {new Date(video.publishedAt).toLocaleDateString()}
        <div className="mt-2 flex flex-wrap gap-2">
          {video.hashtags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-xs md:text-sm text-gray-800 whitespace-pre-line line-clamp-3 hover:line-clamp-none transition-all duration-300 cursor-pointer break-words">
        {video.description}
      </div>
    </div>
  );
};

export default VideoDetails;