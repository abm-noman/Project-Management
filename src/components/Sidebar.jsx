import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "react-feather";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-[#4834d4] h-[calc(100vh-3rem)] border-r border-r-[#64bd95] transition-all duration-500 ${
        collapsed ? "w-[50px]" : "w-[200px]"
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
          <div className="workspace p-3 flex justify-between items-center border-b border-b-[#64bd95]">
            <h4>ABM Noman's Workspace</h4>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-slate-400 p-1 rounded-sm"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="board-list">
            <div className="flex justify-between px-3 py-2">
                <h6>Your Boards</h6>
                <button className="hover:bg-slate-400 p-1 rounded-sm">
                    <Plus size={18}> </Plus>
                </button>
            </div>
          </div>
          <ul>
            <li>
                <button className="px-3 py-2 w-full text-sm flex justify-start align-baseline items-center hover:bg-slate-400">
                    <span className="w-6 h-max rounded-sm mr-2 bg-red-600">&nbsp;</span>
                    <span>Personal Board</span>
                </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
