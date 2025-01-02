import { MoreHorizontal } from "lucide-react";
import { Video } from "lucide-react";
import { Edit } from "lucide-react";
import avatar2 from "../../../assets/avatar/avatar2.jpg";

const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={avatar2}
          alt="avatar"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <h1>John Doe</h1>
      </div>
      <div className="flex gap-5 ">
        <MoreHorizontal size={20} className=" cursor-pointer" />
        <Video size={20} className=" cursor-pointer" />
        <Edit size={20} className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
