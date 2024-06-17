"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { getRanking, updateRanking } from "@/lib/apiCalls";

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
  const [isWinner, setIsWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [title, setTitle] = useState("");
  const [winnerCombo, setWinnerCombo] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!userTurn) {
      setTimeout(() => {
        aiPlay(boardState);
      }, 1000);
    }
    checkResult(boardState);
  }, [boardState, userTurn]);

  const aiPlay = async (board) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_PLAY_API_URL, {
        method: "POST",
        body: JSON.stringify(board),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      setBoardState(data);
      setUserTurn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBoard = (idx) => {
    if (!boardState[idx] && !isWinner) {
      let value = userTurn === true ? "X" : "O";
      setBoardState({ ...boardState, [idx]: value });
      setUserTurn(!userTurn);
    }
  };

  const checkResult = async (board) => {
    // board is filled
    const allFilled = Object.values(board).every((cell) => cell !== "");
    // state of the ranking at the moment
    const actualRanking = await getRanking();
    if (allFilled && !isWinner) {
      setIsWinner(true);
      setDraw(true);
      setTitle("EMPATE!");
      await updateRanking("-", actualRanking);
      return;
    }
    for (let comb of winCombs) {
      const [a, b, c] = comb;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (!userTurn) {
          setIsWinner(true);
          setWinnerCombo([a, b, c]);
          setTitle("VICTORIA!");
          await updateRanking("X", actualRanking);
          return;
        }
        if (userTurn) {
          setIsWinner(true);
          setWinnerCombo([a, b, c]);
          setTitle("DERROTA!");
          await updateRanking("O", actualRanking);
          return;
        }
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
    setIsWinner(false);
    setDraw(false);
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
          <p
            className={`text-sm mb-2 ${
              !isWinner && !draw ? "text-green-600" : "text-red-600"
            }`}
          >{`${
            isWinner || draw ? "Partida finalizada" : "Juego en progreso"
          }`}</p>
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
      {isWinner || draw ? (
        <div className="flex flex-col items-center mt-6">
          <p className="text-xl font-bold mb-4">{title}</p>
          <Button text="Volver a Jugar" action={reset} />
        </div>
      ) : null}
      <Button
        text="Ver Ranking"
        action={() => {
          router.push("/ranking");
        }}
      />
    </div>
  );
}
