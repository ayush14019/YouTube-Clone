import React, { useEffect, useState } from "react";
import { LuCrown } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRadomMessage } from "./Helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRadomMessage(25),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className=" w-[380px] h-[530px] border border-gray-300 rounded-3xl bg-white shadow-sm flex flex-col ml-3">
      {/* Header  */}
      <div className="flex justify-between items-center p-3 border border-gray-300 sticky top-0 bg-white z-10 rounded-t-3xl">
        <h2 className="font-bold text-lg">Live Chat</h2>
        <div className="flex gap-2 ">
          <button
            className="p-0.5 px-1.5  border border-gray-300  rounded-4xl hover:bg-gray-200 flex item center "
            title="XP"
          >
            <LuCrown style={{ fill: "#cb87e8" }} size={20} />
            <span className=" flex items-center font-medium px-0.5">0XP</span>
          </button>
          <button className="p-1  hover:bg-gray-200 " title="ThreeDots">
            <BsThreeDotsVertical size={20} />
          </button>
          <button className="p-1 rounded hover:bg-gray-200" title="close chat">
            <RxCross1 size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col-reverse px-4 py-2 space-y-3 space-y-reverse  scrollbox">
        {
          // Disclamier: Don't use index as a key
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="flex justify-between items-center py-1 px-4 bg-white rounded-b-3xl "
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", liveMessage);

          dispatch(
            addMessages({
              name: "Ayush Raj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-75 px-4 py-1.5 m-1 bg-gray-200 rounded-4xl"
          placeholder="Chat..."
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="py-1.5 px-2 mx-2 bg-black flex items-center text-white rounded-2xl ">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
