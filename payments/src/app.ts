import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

// Middlewares and Errors
import { errorHandler, NotFoundError, currentUser } from '@hpgittix/common';

// Routes
import { createChargeRouter } from './routes/new';

const app = express();
app.use(json());
app.set('trust proxy', true);
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

// Implementing Routes
app.use(createChargeRouter);

// Implementing Middlewares
app.use(errorHandler);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

export { app };
