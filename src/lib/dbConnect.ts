import mongoose from "mongoose";
const DATABASE_URL = process.env.MONGO_URI;

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Db already connected");
    return;
  }
  try {
    const db = await mongoose.connect(DATABASE_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database Successfully connected");
  } catch (error) {
    console.log("Db connection failed", error);
    process.exit(1);
  }
}
export default dbConnect;
