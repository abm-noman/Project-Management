import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { Edit2, MoreHorizontal, UserPlus } from "react-feather";
import { BoardContext } from "../../context/BoardContext.jsx";
import Utilities from "../utilities/Utilities.js";
import AddList from "./AddList.jsx";
import CardAdd from "./CardAdd.jsx";

const Main = () => {
  const { allBoard, setAllBoard } = useContext(BoardContext);
  const bData = allBoard.boards[allBoard.active];

  function onDragEnd(res) {
    if(!res.destination){
        console.log("No destination");
        return;
    }
    const newList = [...bData.list];
    const s_id = parseInt(res.source.droppableId);
    const d_id = parseInt(res.destination.droppableId);
    const [removed] = newList[s_id - 1].items.splice(res.source.index,1);
    newList[d_id - 1].items.splice(res.destination.index,0,removed);

    let board = {...allBoard};
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);

  }

  const cardData = (e,ind) => {
    let newList = { ...bData.list };
    newList[ind].items.push({id:Utilities.makeid(5), title:e});

    let board = {...allBoard};
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

    const listData = (e) => {
    let newList = { ...bData.list };
    newList.push(
        {id:newList.length + 1 + '', title:e, item:[]}
    );

    let board = {...allBoard};
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  return (
    <div className="flex flex-col w-full" style={{backgroundColor:`${bData.bgcolor}`}}>
      <div className="p-3 bg-black bg-opacity-50 flex justify-between items-center w-full">
        <h2 className="text-lg text-white font-bold">{bData.name}</h2>

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
          <DragDropContext onDragEnd={onDragEnd}>
            {bData.list &&
              bData.list.map((x, ind) => {
                return (
                  <div key={ind} className="mr-3 w-60 h-fit rounded-md bg-black shrink-0">
                    <div className="list-body">
                      <div className="flex justify-between items-center px-3 py-1">
                        <span>{x.title}</span>
                        <button className="hover:bg-gray-500 rounded-sm p-1">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                      <Droppable droppableId={String(x.id)}>
                        {(provided, snapshot) => (
                          <div
                            className="py-1"
                            ref={provided.innerRef}
                            style={{

                              backgroundColor: snapshot.isDraggingOver
                                ? "#123"
                                : "transparent",
                            }}
                            {...provided.droppableProps}
                          >
                            {x.items &&
                              x.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <div className="item flex justify-between items-center bg-zinc-700 cursor-pointer rounded-md p-1 m-2 border-2 border-zinc-900 hover:border-gray-500">
                                          <span>{item.title}</span>
                                          <span className="flex justify-start items-start">
                                            <button className="hover:bg-gray-500 p-1 rounded-sm ">
                                              <Edit2 size={16} />
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <CardAdd getCards={(e) => cardData(e,ind)}></CardAdd>
                    </div>
                  </div>
                );
              })}
          </DragDropContext>

          <AddList getList={(e)=> listData(e)}>

          </AddList>
        </div>
      </div>
    </div>
  );
};

export default Main;
