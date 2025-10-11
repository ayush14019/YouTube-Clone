import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const CommentContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [totalComments, setTotalComments] = useState(0); // ✅ New state

  const fetchComments = async () => {
    try {
      const response = await fetch(YOUTUBE_COMMENTS_API(videoId));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const items = data.items || [];

      const parsedComments = items.map((item) => {
        const comment = item.snippet.topLevelComment.snippet;
        return {
          author: comment.authorDisplayName,
          text: comment.textDisplay,
          publishedAt: comment.publishedAt,
          avatar: comment.authorProfileImageUrl,
        };
      });

      setComments(parsedComments);
      setTotalComments(data.pageInfo?.totalResults || 0); // ✅ Set total
    } catch (err) {
      console.error("Failed to fetch comments:", err);
      setError("Unable to load comments");
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  return (
    <div className="md:m-5 md:ml-5 md:p-4 bg-white rounded-xl flex flex-col  w-[850px]">
      {/* ✅ Total Comments Count */}
      <h1 className="text-2xl font-bold text-gray-900">
        {totalComments.toLocaleString()} Comments
      </h1>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {comments.length === 0 && !error ? (
        <p className="text-gray-600 mt-2">No comments yet...</p>
      ) : (
        <ul className="mt-6 space-y-6">
          {comments.map((comment, index) => (
            <li key={index} className="flex items-start space-x-4">
              {/* Avatar */}
              <img
                src={
                  comment.avatar ||
                  "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
                }
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />

              {/* Comment content */}
              <div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {comment.author}
                  </p>
                  <span className="text-xs text-gray-500">
                    {new Date(comment.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <p
                  className="text-sm md:text-nowrap text-gray-800 mt-1 break-words"
                  dangerouslySetInnerHTML={{ __html: comment.text }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentContainer;
