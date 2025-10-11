


import React, { useState, useEffect } from "react";
import {
  MdHome,
  MdSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdVideoLibrary,
  MdMovie,
  MdWatchLater,
  MdThumbUp,
  MdShoppingBag,
  MdMusicNote,
  MdLiveTv,
  MdSportsEsports,
  MdOutlineNewspaper,
  MdSchool,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar container classes
  const sidebarClasses = `
    h-[calc(100vh-0px)] w-60 bg-white shadow-md text-sm overflow-y-auto pt-20 p-8 md:pt-8  transition-transform duration-300 scrollbox
    ${isMobile ? "fixed top-0 left-0 z-50" : "relative"}
    ${isMobile && !isMenuOpen ? "-translate-x-full" : "translate-x-0"}
  `;

  // Mini Sidebar only on Home and desktop
  if (!isMenuOpen && isHome && !isMobile) {
    return (
      <div className="h-[calc(100vh-56px)] w-20 hidden md:flex flex-col items-center py-4 transition-all duration-300">
        <Link
          to="/"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <MdHome size={22} />
          <span className="text-[10px] mt-1">Home</span>
        </Link>

        <div className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
          <SiYoutubeshorts size={20} />
          <span className="text-[10px] mt-1">Shorts</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
          <MdSubscriptions size={20} />
          <span className="text-[10px] mt-1">Subs</span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
          <MdVideoLibrary size={20} />
          <span className="text-[10px] mt-1">Library</span>
        </div>
      </div>
    );
  }

  // Overlay for mobile when sidebar is open
  const overlay = isMobile && isMenuOpen && (
    <div
      className="fixed inset-0  bg-opacity-50 z-40"
      onClick={() => {} /* Dispatch action to close sidebar */}
    />
  );

  // Expanded Sidebar
  if (isMenuOpen || (isMobile && isMenuOpen)) {
    return (
      <>
        {overlay}
        <div className={sidebarClasses}>
          {/* Main Section */}
          <ul className="pb-3 space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              >
                <MdHome size={22} />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <SiYoutubeshorts size={20} /> Shorts
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSubscriptions size={20} /> Subscriptions
            </li>
          </ul>

          <hr className="my-3 border-gray-200" />

          {/* You Section */}
          <h1 className="font-bold pb-1 text-md">You</h1>
          <ul className="pb-3 space-y-2">
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdHistory size={20} /> History
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdPlaylistPlay size={20} /> Playlists
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdVideoLibrary size={20} /> Your Videos
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdMovie size={20} /> Your Movies
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSchool size={20} /> Your Courses
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdWatchLater size={20} /> Watch Later
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdThumbUp size={20} /> Liked Videos
            </li>
          </ul>

          <hr className="my-3 border-gray-200" />

          {/* Subscriptions Section */}
          <h1 className="font-bold pb-1 text-md">Subscriptions</h1>
          <ul className="pb-3 space-y-2">
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSubscriptions size={20} /> Channel 1
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSubscriptions size={20} /> Channel 2
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSubscriptions size={20} /> Channel 3
            </li>
          </ul>

          <hr className="my-3 border-gray-200" />

          {/* Explore Section */}
          <h1 className="font-bold pb-1 text-md">Explore</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdShoppingBag size={20} /> Shopping
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdMusicNote size={20} /> Music
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdLiveTv size={20} /> Live
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdSportsEsports size={20} /> Gaming
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <MdOutlineNewspaper size={20} /> News
            </li>
          </ul>
        </div>
      </>
    );
  }

  return null;
};

export default Sidebar;
















