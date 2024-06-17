import { NextResponse } from "next/server";
import { getBestMove } from "../../../lib/play";

export async function POST(req, res) {
  const data = await req.json();
  const newBoard = getBestMove(data);
  return NextResponse.json(newBoard);
}
