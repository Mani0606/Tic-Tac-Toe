import React from "react";
import { Circle, X } from "lucide-react";

const Box = ({ which }) => {
  let symbol;
  if (which === "cricle") {
    symbol = <Circle color="white" className="size-19 " />;
  } else if (which === "X") {
    symbol = <X color="white" className="size-19" />;
  }
  if (typeof which === "number") {
    symbol = <span className="text-white text-6xl">{which}</span>;
  }

  return (
    <div className="box-content size-20 bg-violet-700 border-2 flex items-center justify-center">
      {symbol}
    </div>
  );
};

export default Box;
