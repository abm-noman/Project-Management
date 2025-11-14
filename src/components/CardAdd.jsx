import { useState } from "react";
import { Plus, X } from "react-feather";
const CardAdd = () => {
//   const [card, setCard] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex flex-col">
        {show && (
          <div className="">
            <textarea
              className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900 "
              cols="24"
              rows="2"
              placeholder="Enter Card Title..."
            ></textarea>
            <div className="flex p-1">
              <button className="bg-green-600 text-white px-2 py-0 rounded mr-2 hover:bg-green-700">
                {" "}
                Add Card{" "}
              </button>
              <button onClick={() => setShow(!show)} className="hover:bg-red-600 p-1 rounded-lg">
                <X size={16}> </X>
              </button>
            </div>
          </div>
        )}
        {!show && (
          <button onClick={() => setShow(!show)} className="flex w-full p-1 justify-start items-center rounded mt-1  hover:bg-gray-800 h-8 text-green-600">
            <Plus size={16} />
            Add a Card
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAdd;
