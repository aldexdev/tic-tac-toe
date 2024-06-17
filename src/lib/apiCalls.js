// API call to get the existing rankings
export const getRanking = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RANKING_API_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

// API call to create a ranking
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

// API call to update an existing ranking
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
