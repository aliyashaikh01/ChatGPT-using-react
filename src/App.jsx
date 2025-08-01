import React, { useContext } from "react";
import ChatSection from "./components/ChatSection/ChatSection";
import Sidebar from "./components/Sidebar/Sidebar";
import Separation from "./components/Separation/Separation";
import { dataContext } from "./Context/UserContext";

function App() {

  return (
    <>
      <Sidebar/>
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App;
