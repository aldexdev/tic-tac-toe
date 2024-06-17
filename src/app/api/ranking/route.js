import { NextResponse } from "next/server";
import Ranking from "@/models/Ranking";
import { updatedObject } from "@/lib/updateRanking";
import connect from "@/lib/connection";

// PUT req to update an existing Ranking
export async function PUT(req, res) {
  try {
    const { winner, ranking } = await req.json();
    await connect();
    const newRanking = await Ranking.findByIdAndUpdate(
      ranking._id,
      updatedObject(winner, ranking),
      { new: true }
    );
    const response = JSON.stringify(newRanking);
    return new NextResponse(response);
  } catch (error) {
    return new NextResponse("No se pudo actualizar el ranking: " + error, {
      status: 500,
    });
  }
}

// GET req to get the existing rankings
export async function GET(req, res) {
  try {
    await connect();
    // find all docs matching the model
    const rank = await Ranking.find({});
    const response = JSON.stringify(rank);
    return new NextResponse(response);
  } catch (error) {
    return new NextResponse("No se pudo actualizar el ranking: " + error, {
      status: 500,
    });
  }
}
