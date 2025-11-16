import { useState } from "react";
import { Plus, X } from "react-feather";
const AddList = (props) => {
  const [list, setlist] = useState("");
  const [show, setShow] = useState(false);

  const saveList = () => {
    if (!list) {
      return;
    }
    props.getLists(list);
    setList("");
    setShow(!show);
  };

    const closeButton = () => {
    setShow(!show);
    setList("");
  };

  return (
    <div>
      <div className="flex flex-col h-fit shrink-0 mr-3 w-60 rounded-md p-2 bg-black ">
        {show && (
          <div className="">
            <textarea
            value={list}
            onChange={(e) => setList(e.target.value)}
              className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900 "
              cols="24"
              rows="2"
              placeholder="Enter List Title..."
            ></textarea>
            <div className="flex p-1">
              <button
                onClick={() => saveList()}
                className="bg-green-600 text-white px-2 py-0 rounded mr-2 hover:bg-green-700"
              >
                {" "}
                Add List{" "}
              </button>
              <button
                onClick={() => closeButton()}
                className="hover:bg-red-600 p-1 rounded-lg"
              >
                <X size={16}> </X>
              </button>
            </div>
          </div>
        )}
        {!show && (
          <button
            onClick={() => setShow(!show)}
            className="flex w-full p-1 justify-center items-center rounded mt-1  hover:bg-gray-800 h-8 text-green-600"
          >
            <Plus size={16} />
            Add a List
          </button>
        )}
      </div>
    </div>
  );
};

export default AddList;
