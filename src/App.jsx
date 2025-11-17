import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { BoardContext } from "./context/BoardContext";

function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: "Development Tasks",
        bgcolor: "#0fbcf9",
        list: [
          {
            id: 1,
            title: "To Do",
            items: [{ id: "card1", title: "Project Description 1" }],
          },
          {
            id: 2,
            title: "In Progress",
            items: [{ id: "card2", title: "Project Description 2" }],
          },
          {
            id: 3,
            title: "Completed",
            items: [{ id: "card3", title: "Project Description 3" }],
          },
        ],
      },
    ],
  };
  const [allBoard, setAllBoard] = useState(boardData);

  return (
    <div className="App">
      <Header> </Header>
      <BoardContext.Provider value={{ allBoard, setAllBoard }}>
        <div className="content flex">
          <Sidebar> </Sidebar>
          <Main> </Main>
        </div>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
