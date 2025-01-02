import ChatList from "./Chatlist/ChatList";
import UserInfo from "./UserInfo/UserInfo";

const List = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#111111] overflow-hidden ">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
