import { getBestMove } from "@/lib/play";

describe("getBestMove function", () => {
  it('returns a new valid board with "O" making the best move', () => {
    // Tablero de ejemplo antes de la jugada
    const board = {
      0: "",
      1: "",
      2: "X",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    };

    // Obtener el mejor movimiento
    const newBoard = getBestMove(board);
    // Verificar que se haya realizado alguna jugada válida
    expect(newBoard).toBeDefined();
    expect(newBoard[4]).toBe("O");
    expect(newBoard[2]).toBe("X");
  });
});
