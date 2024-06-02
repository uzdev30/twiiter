import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignFirst from "./components/signUp/signFirst";
import Home from "./components/home/home";
import Explore from "./components/explore/explore";
import Notification from "./components/notification/notification";
import Messages from "./components/messages/messsages";
import Bookmark from "./components/bookmark/bookmark";
import List from "./components/list/list";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignFirst />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/list" element={<List />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
