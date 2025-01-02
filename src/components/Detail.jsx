import avatar from "../assets/avatar/avatar2.jpg";
import { ChevronUp, ChevronDown, Download } from "lucide-react";

const Detail = () => {
  return (
    <div className="flex-1 ">
      <div className="user py-[30px] px-5 flex flex-col items-center gap-2 border border-white/10">
        <img
          src={avatar}
          alt=""
          className="w-[100px] h-[100px] object-cover rounded-full"
        />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info p-5 flex flex-col gap-[30px]">
        <div className="option ">
          <div className="title flex items-center justify-between">
            <span>Chat Setting</span>
            <ChevronUp size={20} className="text-white/70" />
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Privacy & help</span>
            <ChevronUp size={20} className="text-white/70" />
          </div>
        </div>
        <div className="option flex flex-col gap-3">
          <div className="title flex items-center justify-between">
            <span>Shared photos</span>
            <ChevronDown size={20} className="text-white/70" />
          </div>
          <div className="photos flex flex-col gap-3">
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5">
                <img
                  src="https://www.cshl.edu/wp-content/uploads/2023/05/AI_deep_space.jpg"
                  alt=""
                  className="w-10 h-10 rounded-[5px] object-cover"
                />
                <span className="text-white/50 text-sm">Photo-name</span>
              </div>
              <Download size={20} className="text-white/70" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Shared Files</span>
            <ChevronUp size={20} className="text-white/70" />
          </div>
        </div>
        <button className="py-2 rounded-lg cursor-pointer px-5 bg-red-500 hover:bg-red-600 transition-all ease-linear">
          Block User
        </button>
        <button className="py-2 rounded-lg cursor-pointer px-5 bg-indigo-500 hover:bg-indigo-600 transition-all ease-linear">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
