import React from "react";
import { X } from "lucide-react";
import { Circle } from "lucide-react";
import { NotebookTabs } from "lucide-react";

const PopUp = ({ Close, Winner, new_game, new_set }) => {
  return (
    <div className="fixed inset-0  bg-opacity-[0.3] backdrop-blur-sm flex items-center justify-center   text-white">
      <div className=" bg-purple-700 border-0 rounded-4xl flex flex-col items-center px-20 py-20">
        {Winner && (
          <>
            <h2>Winner: </h2>
            {Winner == "cricle" ? <Circle size={35} /> : <X size={35} />}
          </>
        )}
        <div className="flex flex-row mt-5 space-x-3">
          <button
            className="bg-purple-400 px-5 py-3 rounded-2xl"
            onClick={new_game}
          >
            New Game
          </button>
          <button
            className="bg-purple-400 px-5 py-3 rounded-2xl"
            onClick={new_set}
          >
            New Set
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
