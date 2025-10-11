import React from "react";
import { LiaUserSecretSolid } from "react-icons/lia";

const ChatMessage = ({name , message}) => {
  return (
    <div>
      <div className="flex items-center  p-1">
        <LiaUserSecretSolid size={25} />
        <span className="font-semibold  px-2">{name}</span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
