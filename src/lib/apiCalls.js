import mongoose from "mongoose";

export const getRanking = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RANKING_API_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) return data[0];
    return;
  } catch (error) {
    console.log(error);
  }
};

export const createRanking = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RANKING_API_URL, {
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
    const res = await fetch(process.env.NEXT_PUBLIC_RANKING_API_URL, {
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
