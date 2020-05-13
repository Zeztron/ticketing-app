import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

// Routes
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

// Middlewares
import { errorHandler } from './middlewares/error-handler';

// Errors
import { NotFoundError } from './errors/not-found-error';

const PORT = 3000;
const app = express();
app.use(json());
app.set('trust proxy', true);

// Implementing Routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// Implementing Middlewares
app.use(errorHandler);
app.use(cookieSession({
  signed: false,
  secure: true
}));

app.all('*', async () => {
  throw new NotFoundError();
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (err) {
    console.log(err);
  };

  app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
};

// 🚀
start();
