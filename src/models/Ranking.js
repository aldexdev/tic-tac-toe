import { Schema, model, models } from "mongoose";

const RankingSchema = new Schema({
  playerX: {
    won: Number,
    lost: Number,
    tied: Number,
  },
  playerO: {
    won: Number,
    lost: Number,
    tied: Number,
  },
});

const Ranking = models.Ranking || model("Ranking", RankingSchema);

export default Ranking;
