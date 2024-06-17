import { updatedObject } from "@/lib/updateRanking";

describe("updatedObject function", () => {
  it("updates ranking when player X wins", () => {
    const player = "X";
    const initialRanking = {
      playerX: { won: 0, lost: 0, tied: 0 },
      playerO: { won: 0, lost: 0, tied: 0 },
    };

    const updatedRanking = updatedObject(player, initialRanking);

    expect(updatedRanking.playerX.won).toBe(1);
    expect(updatedRanking.playerO.lost).toBe(1);
    expect(updatedRanking.playerX.lost).toBe(0);
    expect(updatedRanking.playerO.won).toBe(0);
    expect(updatedRanking.playerX.tied).toBe(0);
    expect(updatedRanking.playerO.tied).toBe(0);
  });

  it("updates ranking when player O wins", () => {
    const player = "O";
    const initialRanking = {
      playerX: { won: 0, lost: 0, tied: 0 },
      playerO: { won: 0, lost: 0, tied: 0 },
    };

    const updatedRanking = updatedObject(player, initialRanking);

    expect(updatedRanking.playerX.won).toBe(0);
    expect(updatedRanking.playerO.lost).toBe(0);
    expect(updatedRanking.playerX.lost).toBe(1);
    expect(updatedRanking.playerO.won).toBe(1);
    expect(updatedRanking.playerX.tied).toBe(0);
    expect(updatedRanking.playerO.tied).toBe(0);
  });

  it("updates ranking when players tie", () => {
    const player = "-";
    const initialRanking = {
      playerX: { won: 0, lost: 0, tied: 0 },
      playerO: { won: 0, lost: 0, tied: 0 },
    };

    const updatedRanking = updatedObject(player, initialRanking);

    expect(updatedRanking.playerX.won).toBe(0);
    expect(updatedRanking.playerO.lost).toBe(0);
    expect(updatedRanking.playerX.lost).toBe(0);
    expect(updatedRanking.playerO.won).toBe(0);
    expect(updatedRanking.playerX.tied).toBe(1);
    expect(updatedRanking.playerO.tied).toBe(1);
  });

  it("returns undefined for unknown player", () => {
    const player = "unknown";
    const initialRanking = {
      playerX: { won: 0, lost: 0, tied: 0 },
      playerO: { won: 0, lost: 0, tied: 0 },
    };

    const updatedRanking = updatedObject(player, initialRanking);

    expect(updatedRanking).toBeUndefined();
  });
});
