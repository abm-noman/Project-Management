import { useState } from "react";
import { BoardContext } from "../context/BoardContext";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: "Development Tasks",
        bgcolor: "#0fbcf9",
        list: [
          { id: 1, title: "To Do", items:[{id:"crdFt", title:"Project Description 1"}] },
          { id: 2, title: "In Progress", items:[{id:"crdSc", title:"Project Description 2"}] },
          { id: 3, title: "Completed", items:[{id:"crdtd", title:"Project Description 3"}] },
        ]
      }
     ]

  }
  const [allBoard, setAllBoard] = useState(boardData);

  return (
    <div className="App">
      <Header> </Header>
      <div className="content flex">
        <BoardContext.Provider value={{ allBoard, setAllBoard }}>
          <Sidebar> </Sidebar>
          <Main> </Main>
        </BoardContext.Provider>
      </div>
    </div>
  );
}

export default App;
