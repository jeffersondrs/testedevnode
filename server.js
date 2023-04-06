import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config({ path: ".env" });

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL.replace(
        "<PASSWORD>",
        process.env.DATABASE_PASSWORD
      ),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB connection successful!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();

const server = app.listen(PORT, "127.0.0.1", () => {
  console.log(`App running on port ${PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
