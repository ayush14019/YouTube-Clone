import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div
      className={`flex flex-col transition-all duration-300
    ${isMenuOpen ? "md:ml-[100px] " : "md:ml-16"}
  `}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;







