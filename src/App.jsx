import List from "./components/List/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div className="bg-foreground h-screen text-background flex overflow-hidden ">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
