import mongoose from "mongoose";
import { app } from './app';
import { DatabaseConnectionError } from "./errors/database-connection-error";

const PORT = 3000;

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (err) {
    throw new DatabaseConnectionError();
  };

  app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
};

// 🚀
start();
