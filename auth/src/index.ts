import mongoose from 'mongoose';
import { app } from './app';
import { DatabaseConnectionError } from '@hpgittix/common';

const PORT = 3000;

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined');

  if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined');

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to Auth Mongo');
  } catch (err) {
    throw new DatabaseConnectionError();
  }

  app.listen(PORT, () =>
    console.log(`Auth Service - Listening on Port ${PORT}`)
  );
};

// 🚀
start();
