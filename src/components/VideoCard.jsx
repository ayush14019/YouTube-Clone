import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return <div className="p-4 bg-red-100">Invalid Video Data</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Format published date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return "Today";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // Format view count
  const formatViews = (viewCount) => {
    if (!viewCount) return null;
    const count = parseInt(viewCount);
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M views`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K views`;
    return `${count.toLocaleString()} views`;
  };

  return (
    <div className="w-[360px] m-2   cursor-pointer">
      {/* Thumbnail */}
      <img
        // className="w-full h-56 object-cover rounded-xl"
        className="w-full max-w-[430px] md:max-w-none object-cover rounded-xl"
        alt={title}
        src={thumbnails?.medium?.url || thumbnails?.high?.url}
      />

      {/* Info Section */}
      <div className="mt-3 px-1">
        {/* Title */}
        <h3 className="text-sm md:text-base font-semibold leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Channel */}
        <p className="text-xs md:text-sm text-gray-600 mt-1">{channelTitle}</p>

        {/* Views and Date */}
        <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600">
          {statistics?.viewCount && (
            <>
              <span>{formatViews(statistics.viewCount)}</span>
              <span>•</span>
            </>
          )}
          <span>{formatDate(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;


