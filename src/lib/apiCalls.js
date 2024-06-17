import mongoose from "mongoose";

export const getRanking = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ranking", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = res.json();
    if (data) return data[0];
    return;
  } catch (error) {
    console.log(error);
  }
};

export const createRanking = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ranking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateRanking = async (winner, ranking) => {
  const args = {
    winner: winner,
    ranking: ranking,
  };
  try {
    const res = await fetch("http://localhost:3000/api/ranking", {
      method: "PUT",
      body: JSON.stringify(args),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};
