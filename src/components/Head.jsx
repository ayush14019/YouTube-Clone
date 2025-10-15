import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMenu,
  setSearchQuery as setSearchQueryAction,
  clearSearchQuery,
} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import clsx from "clsx";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (query = searchQuery) => {
    if (!query.trim()) return;

    dispatch(setSearchQueryAction(query));
    setSearchQuery("");
    setShowSuggestions(false);
    setMobileSearch(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    dispatch(clearSearchQuery());
    setSearchQuery("");
  };

  // Debounce API
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery) return;
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1] || []);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-xs">
      {/* Left */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={toogleMenuHandler}
        >
          <RxHamburgerMenu size={24} />
        </button>
        <a href="/" onClick={handleLogoClick}>
          <img
            className="h-7 ml-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </a>
      </div>

      {/* Center - Desktop Search Bar */}
      {isDesktop && (
        <div className="relative flex items-center flex-1 max-w-2xl mx-4">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            className={clsx(
              "flex-1 border-2 rounded-l-full px-4 py-2 focus:outline-none",
              isActive ? "border-blue-500" : "border-gray-300"
            )}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            onFocus={() => {
              setIsActive(true);
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setIsActive(false);
              setTimeout(() => setShowSuggestions(false), 200);
            }}
          />

          <button
            className="border border-gray-100 bg-gray-100 px-5 py-3 rounded-r-full hover:bg-gray-200 mr-3"
            onClick={() => handleSearch()}
          >
            <CiSearch size={20} />
          </button>

          <button className="p-2 ml-3 bg-gray-100 hover:bg-gray-200 rounded-full">
            <MdKeyboardVoice size={24} />
          </button>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white py-2 mt-1 w-full shadow-lg rounded-lg z-50">
              <ul>
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onMouseDown={() => {
                      setSearchQuery(s);
                      handleSearch(s);
                    }}
                  >
                    <CiSearch size={18} /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Right */}
      <div className="flex items-center space-x-4 md:space-x-6 flex-shrink-0">
        {/* Mobile search icon - Only visible on mobile */}
        {!isDesktop && (
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileSearch(!mobileSearch)}
          >
            <CiSearch size={24} />
          </button>
        )}

        <button className="hidden md:flex items-center gap-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full">
          <BsPlusLg size={18} />
          <span className="text-sm font-medium">Create</span>
        </button>

        <button className="hover:bg-gray-100 p-2 rounded-full">
          <IoMdNotificationsOutline size={24} />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <FaUserCircle size={28} />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearch && !isDesktop && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-2 md:hidden z-50">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              placeholder="Search"
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
              autoFocus
            />
            <button
              className="ml-2 p-2 rounded-full hover:bg-gray-100"
              onClick={() => {
                setMobileSearch(false);
                setShowSuggestions(false);
              }}
            >
              ✕
            </button>
          </div>

          {/* Suggestions dropdown for mobile */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="bg-white py-2 mt-2 w-full shadow-lg rounded-lg">
              <ul>
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onMouseDown={() => {
                      setSearchQuery(s);
                      handleSearch(s);
                    }}
                  >
                    <CiSearch size={18} /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Head;

