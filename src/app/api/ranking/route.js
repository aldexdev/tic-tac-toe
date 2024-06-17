import { NextResponse } from "next/server";
import Ranking from "@/models/Ranking";
import { updatedObject } from "@/lib/updateRanking";
import connect from "@/lib/connection";

export async function POST(req, res) {
  const newRanking = new Ranking({
    playerX: {
      won: 0,
      lost: 0,
      tied: 0,
    },
    playerO: {
      won: 0,
      lost: 0,
      tied: 0,
    },
  });
  try {
    await connect();
    await newRanking.save();
    return NextResponse.json(newRanking);
  } catch (error) {
    return new NextResponse("No se pudo crear el ranking: " + error, {
      status: 500,
    });
  }
}

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

export async function GET(req, res) {
  try {
    await connect();
    const rank = await Ranking.find({});
    const response = JSON.stringify(rank);
    return new NextResponse(response);
  } catch (error) {
    return new NextResponse("No se pudo actualizar el ranking: " + error, {
      status: 500,
    });
  }
}
