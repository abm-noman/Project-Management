import { useContext } from "react";
import { Edit2, MoreHorizontal, UserPlus } from "react-feather";
import { BoardContext } from "../../context/BoardContext.jsx";
import CardAdd from "./CardAdd.jsx";

const Main = () => {
    const { allBoard, setAllBoard } = useContext(BoardContext);
    const bData = allBoard.boards[allBoard.active];
  return (
    <div className="flex flex-col bg-[#1e272e] w-full">
      <div className="p-3 bg-black bg-opacity-50 flex justify-between items-center w-full">
        <h2 className="text-lg text-white font-bold">
          {bData.name}
        </h2>

        <div className="flex items-center justify-center">
          <button className="bg-gray-200 text-gray-500 px-3 py-0 mr-2 rounded flex justify-around items-center hover:bg-slate-300">
            <UserPlus size={16} className="mr-2" />
            Share
          </button>
          <button className="hover:bg-gray-500 px-2 py-1 h-8 rounded">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full grow relative">
        <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
          <div className="mr-3 w-60 h-fit rounded-md bg-black shrink-0">
            <div className="list-body">
              <div className="flex justify-between items-center px-3 py-1">
                <span>To Do</span>
                <button className="hover:bg-gray-500 rounded-sm p-1">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="item flex justify-between items-center bg-zinc-700 cursor-pointer rounded-md p-1 m-2 border-2 border-zinc-900 hover:border-gray-500">
                <span>Project Description</span>
                <span className="flex justify-start items-start">
                  <button className="hover:bg-gray-500 p-1 rounded-sm ">
                    <Edit2 size={16} />
                  </button>
                </span>
              </div>
              <CardAdd> </CardAdd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
