"use client";

import { useState } from "react";

export default function Home() {
  const [userTurn, setUserTurn] = useState(true); // state of the user turn
  const [boardState, setBoardState] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  }); // state of each cell

  const updateBoard = (idx) => {
    if (!boardState[idx]) {
      let value = userTurn === true ? "X" : "O";
      setBoardState({ ...boardState, [idx]: value });
      setUserTurn(!userTurn);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-1 mb-4 font-bold">
        <h1>Tres en Raya</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center text-2xl mb-2">
          <p>{userTurn === true ? "Es tu turno!" : "Turno de la IA"}</p>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-2">
          {[...Array(9)].map((v, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg"
                onClick={() => {
                  updateBoard(idx);
                }}
              >
                {boardState[idx]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
