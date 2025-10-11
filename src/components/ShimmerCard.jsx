const ShimmerCard = () => {
  return (
    <div className="mt-2 mx-2 w-[360px] md:w-full rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Video thumbnail */}
      <div className="w-full h-46 rounded-xl sm:h-48 md:h-52 bg-gray-300"></div>

      {/* Title and description */}
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
