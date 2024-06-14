"use client";

import { useState, useEffect } from "react";

const winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [userTurn, setUserTurn] = useState(true);
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
  });
  const [winner, setWinner] = useState(false);
  const [title, setTitle] = useState("");
  const [winnerCombo, setWinnerCombo] = useState([]);

  useEffect(() => {
    checkResult(boardState);
  }, [boardState]);

  const updateBoard = (idx) => {
    if (!boardState[idx] && !winner) {
      let value = userTurn === true ? "X" : "O";
      setBoardState({ ...boardState, [idx]: value });
      setUserTurn(!userTurn);
    }
  };

  const checkResult = (board) => {
    // board is filled
    const allFilled = Object.values(board).every((cell) => cell !== "");
    for (let comb of winCombs) {
      const [a, b, c] = comb;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(true);
        setWinnerCombo([a, b, c]);
        setTitle(`${!userTurn ? "Victoria!" : "Derrota!"}`);
        return;
      }
      if (allFilled && !winner) {
        setTitle("Empate!");
      }
    }
  };

  const reset = () => {
    setBoardState({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    });
    setUserTurn(true);
    setWinner(false);
    setWinnerCombo([]);
    setTitle("");
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
                className={`bg-[#eee] ${
                  userTurn ? "shadow-[0px_4px_#ddd]" : "shadow-none"
                } text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg ${
                  winnerCombo.includes(idx)
                    ? "bg-black text-white shadow-none"
                    : ""
                }`}
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

      <div
        className={`w-[250px] shadow-[0px_0px_10px_0px_gray] flex flex-col items-center fixed bg-white -translate-x-2/4 -translate-y-2/4 transition-transform duration-[0.2s] p-6 rounded-2xl scale-0 left-2/4 top-1/4 ${
          title ? "-translate-x-2/4 -translate-y-2/4 scale-100" : ""
        }`}
      >
        <div className="text-xl font-bold mb-4">{title}</div>
        <button
          className="bg-black text-white w-full h-9 text-lg font-semibold border-none rounded-md drop-shadow-[0px_4px_#ddd] hover:drop-shadow-none"
          onClick={reset}
        >
          Nuevo Juego
        </button>
      </div>
    </div>
  );
}
