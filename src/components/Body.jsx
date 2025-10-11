
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className="pt-16 flex overflow-hidden">
      {/* 👈 stop horizontal scroll */}
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] transition-all duration-300 z-20
    ${isMenuOpen ? "w-[260px]" : "w-0 md:w-16"}
  `}
      >
        <Sidebar />
      </div>
      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300
    ${isMenuOpen ? "md:ml-[100px]" : "ml-0 md:ml-16"}
  `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;













