import { Search } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { Minus } from "lucide-react";
import { useState } from "react";
import avatar3 from "../../../assets/avatar/avatar3.jpg";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="flex  flex-col h-full">
      <div className="flex items-center gap-5 p-5 ">
        <div className="flex-1 bg-[#171717] flex items-center gap-5 rounded-lg p-[10px]">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none flex-1"
          />
        </div>
        <button
          className="p-[10px] bg-[#171717] rounded-lg"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? <Minus size={20} /> : <PlusIcon size={20} />}
        </button>
      </div>

      <div className=" overflow-y-scroll flex-1 scrollbar">
        <div className="flex items-center gap-5 p-5 border-b border-white/10">
          <img
            src={avatar3}
            alt="avatar"
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-[10px]">
            <span className=" font-medium">Jane Doe</span>
            <p className="font-light text-sm">Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
