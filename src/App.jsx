import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PopUp from "./Components/PopUp";
import Box from "./Components/Box";
import { Pause } from "lucide-react";

function App() {
  const [close, setClose] = useState(false);
  const [boxes, setBoxes] = useState(Array(9).fill(""));

  const [pop, setpop] = useState(false);

  const [x_wines, setX_W] = useState(0);
  const [o_wines, seto_W] = useState(0);

  const winner = useRef("");

  function handleBoxClick(index) {
    if (boxes[index] !== "") return;
    const newBoxes = [...boxes];
    newBoxes[index] = close ? "cricle" : "X";
    console.log(index);
    setBoxes(newBoxes);
    setClose(!close);
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < 8; ++i) {
      if (
        newBoxes[winningCombinations[i][0]] &&
        newBoxes[winningCombinations[i][1]] != "" &&
        newBoxes[winningCombinations[i][2]] != ""
      ) {
        if (
          newBoxes[winningCombinations[i][0]] === "X" &&
          newBoxes[winningCombinations[i][1]] === "X" &&
          newBoxes[winningCombinations[i][2]] === "X"
        ) {
          setX_W((w) => w + 1);
          winner.current = "X";
          setpop(true);
        } else if (
          newBoxes[winningCombinations[i][0]] === "cricle" &&
          newBoxes[winningCombinations[i][1]] === "cricle" &&
          newBoxes[winningCombinations[i][2]] === "cricle"
        ) {
          seto_W((o) => o + 1);
          winner.current = "cricle";
          setpop(true);
        }
      }
    }
  }

  function set() {
    setX_W(0);
    seto_W(0);
    setBoxes(Array(9).fill(""));

    setpop(false);
  }

  function game_new() {
    setBoxes(Array(9).fill(""));

    setpop(false);
  }

  return (
    <>
      <div className="h-screen bg-purple-500 flex-col md:flex-row flex justify-between items-center">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 md:gap-4 bg-violet-950 p-2 md:p-3 mt-10 md:ml-10 md:mt-0">
          <Box which={"X"} />
          <Box which={x_wines} />
        </div>
        <div>
          <div className="place-self-end">
            <button
              onClick={() => {
                setpop(!pop);
              }}
            >
              <Pause size={35} color="white" />
            </button>
          </div>
          <div className=" p-2 md:p-5 bg-violet-950 shadow-2xl shadow-violet-800">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4">
              {boxes.map((symbol, idx) => (
                <button key={idx} onClick={() => handleBoxClick(idx)}>
                  <Box which={boxes[idx]} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-2 md:gap-4 bg-violet-950 p-2 md:p-3 mb-10 md:mr-10 md:mb-0">
          <Box which={o_wines} />
          <Box which={"cricle"} />
        </div>
        {pop && (
          <PopUp
            Close={() => setpop(!pop)}
            Winner={winner.current}
            new_set={set}
            new_game={game_new}
          />
        )}
      </div>
    </>
  );
}

export default App;
