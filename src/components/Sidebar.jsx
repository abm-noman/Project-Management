import { useContext, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";
import { BoardContext } from "../context/BoardContext";

const Sidebar = () => {
  const blankBoard = {
    name: "",
    bgcolor: "#000000",
    list: [],
  };


  const [boardData, setBoardData] = useState(blankBoard);
  const [collapsed, setCollapsed] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const { allboard, setAllboard } = useContext(BoardContext);

  const setActiveBoard = (i) => {
    let newBoard = { ...allboard }
    newBoard.active = i;
    setAllboard(newBoard);
  };

    const addBoard = () => {
  let newBoard = {
    ...allboard,
    boards: [...allboard.boards, boardData], // create NEW array
  };

  setAllboard(newBoard);
  setBoardData(blankBoard);
  setShowPop(!showPop);
};

  return (
    <div
      className={`relative bg-[#130e33] h-[calc(100vh-3rem)] border-r border-r-[#1a193d] transition-all duration-500 overflow-visible ${
        collapsed ? "w-[50px]" : "w-[250px]"
      }`}
    >
      {collapsed && (
        <div className="p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-slate-400 rounded-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {!collapsed && (
        <div>
          <p>{JSON.stringify(allboard)}</p>
          <div className="workspace p-3 flex justify-between items-center border-b border-b-[#1a193d]">
            <h4>ABM Noman's Workspace</h4>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-slate-400 p-1 rounded-sm"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="board-list">
            <div className="flex justify-between px-3 py-2 items-center">
              <h6>Your Boards</h6>

              {/* POPUP BUTTON */}
              <Popover
                isOpen={showPop}
                onClickOutside={() => setShowPop(false)}
                position="right"
                align="start"
                content={
                  <div className="ml-2  w-60 flex flex-col justify-center items-center bg-slate-600 text-white rounded">
                    <button
                      onClick={() => setShowPop(!showPop)}
                      className="absolute right-2 top-2 bg-gray-800 hover:bg-gray-700 p-1 rounded"
                    >
                      <X size={16} />{" "}
                    </button>
                    <h4 className="py-3">Create New Board</h4>
                    <img src="http://placehold.co/200x120/png" alt="" />

                    <div className="mt-3 flex flex-col items-start w-full">
                      <label className="px-3 pt-3" htmlFor="title">
                        Board Title <span>*</span>{" "}
                      </label>
                      <input
                        value={boardData.name}
                        onChange={(e) =>
                          setBoardData({ ...boardData, name: e.target.value })
                        }
                        className=" h-8 px-2 w-full rounded border-2 border-gray-500"
                        type="text"
                        id="board-name"
                        placeholder="Enter board name..."
                      />
                      <label className="px-3 pt-3" htmlFor="Color">
                        Board Color{" "}
                      </label>
                      <input
                        value={boardData.bgcolor}
                        onChange={(e) =>
                          setBoardData({
                            ...boardData,
                            bgcolor: e.target.value,
                          })
                        }
                        className=" h-8 px-2 w-full rounded border-2 border-gray-500"
                        type="Color"
                        id="board-color"
                      />
                      <button
                        onClick={() => addBoard()}
                        className="w-full rounded h-8 bg-slate-700 mt-2 hover:bg-green-600"
                      >
                        {" "}
                        Create Board{" "}
                      </button>
                    </div>
                  </div>
                }
              >
                <button
                  onClick={() => setShowPop(!showPop)}
                  className="hover:bg-slate-400 p-1 rounded-sm"
                >
                  <Plus size={16} />
                </button>
              </Popover>
            </div>
          </div>

          <ul>
            {allboard &&
              allboard.boards.map((x, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => setActiveBoard(i)}
                      className="px-3 py-2 w-full text-sm flex items-center hover:bg-slate-400"
                    >
                      <span
                        className="w-6 h-4 rounded-sm mr-2"
                        style={{ backgroundColor: `${x.bgcolor}` }}
                      ></span>
                      <span>{x.name}</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
