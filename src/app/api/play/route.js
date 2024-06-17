import { NextResponse } from "next/server";
import { getBestMove } from "../../../lib/play";

// POST req to get a new bord with AI move
export async function POST(req, res) {
  try {
    const data = await req.json();
    const newBoard = getBestMove(data);
    return NextResponse.json(newBoard);
  } catch (error) {
    return new NextResponse("No se pudo crear el ranking: " + error, {
      status: 500,
    });
  }
}
