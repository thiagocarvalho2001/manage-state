import { RecoilRoot } from "recoil";
import "./App.css";
import PostsComponent from "./principal/PostsComponent";
import { AppProvider } from "./principal/AppProvider";

function App() {
  return (
    <AppProvider>
      <RecoilRoot>
        <PostsComponent />
      </RecoilRoot>
    </AppProvider>
  );
}

export default App;
