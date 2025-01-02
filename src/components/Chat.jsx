import { Camera, Image, Info, Mic, Phone, Smile, Video } from "lucide-react";
import avatar from "../assets/avatar/avatar2.jpg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);

  return (
    <div className="flex-[2.5] flex flex-col border-l border-r border-white/5 lala h-full">
      <div className="top p-5 flex items-center justify-between border-b border-white/10">
        <div className="user flex items-center gap-5">
          <img
            src={avatar}
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">Jane Doe</span>
            <p className="text-sm text-white/60 font-normal">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="icons flex gap-5 items-center">
          <Phone size={20} />
          <Video size={20} />
          <Info size={20} />
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-scroll flex flex-col gap-5 scrollbar">
        <div className="message max-w-[70%] flex gap-5">
          <img
            src={avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="bg-white/10 flex-1 flex gap-1 flex-col p-3 rounded-2xl">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ab, harum quibusdam ipsum rem exercitationem natus molestiae iusto
              doloremque fugiat debitis ducimus eos soluta. Ducimus hic quisquam
              similique natus ea.
            </p>
            <span className="text-xs font-normal text-white/70 flex justify-end mr-2">
              1 min ago
            </span>
          </div>
        </div>

        <div className="message own self-end flex flex-col  gap-5 max-w-[70%]">
          <div className="bg-indigo-600 flex-1 flex gap-1 flex-col rounded-2xl  p-3">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ab, harum quibusdam ipsum rem exercitationem natus molestiae iusto
              doloremque fugiat debitis ducimus eos soluta. Ducimus hic quisquam
              similique natus ea.
            </p>
            <span className="text-xs font-normal text-white/70 flex justify-end mr-2">
              1 min ago
            </span>
          </div>
        </div>

        <div className="message own self-end flex flex-col  gap-5 max-w-[70%]">
          <div className="p-[6px] bg-indigo-600 rounded-2xl flex flex-col gap-1">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://cdn.pixabay.com/photo/2023/06/27/20/53/ai-generated-8092998_1280.png"
              alt=""
            />
            <span className="text-xs mr-2 font-normal text-white/70 flex justify-end">
              1 min ago
            </span>
          </div>
          <div className="bg-indigo-600 flex-1 flex gap-1 flex-col rounded-2xl  p-3">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ab, harum quibusdam ipsum rem exercitationem natus molestiae iusto
              doloremque fugiat debitis ducimus eos soluta. Ducimus hic quisquam
              similique natus ea.
            </p>
            <span className="text-xs font-normal text-white/70 flex justify-end mr-2">
              1 min ago
            </span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className=" mt-auto p-5 flex items-center justify-between border-t border-white/10 gap-5">
        <div className="icons flex items-center gap-5 ">
          <Image size={20} />
          <Camera size={20} />
          <Mic size={20} />
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=" bg-[#171717] border-none outline-none flex-1 py-2 px-4 rounded-lg text-base "
        />

        <div className="emoji relative">
          <Smile size={20} onClick={() => setOpen((prev) => !prev)} />
          <div className=" absolute bottom-[50px] left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className=" bg-indigo-500 py-2 px-5 rounded-lg cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
