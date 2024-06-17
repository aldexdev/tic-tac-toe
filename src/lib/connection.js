import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://aldex:Aa12%40marzo@tictactoe.khfzyxy.mongodb.net/?retryWrites=true&w=majority&appName=TicTacToe";

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI, {
      dbName: "restapinext14",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (error) {
    console.log("Error in connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

export default connect;
