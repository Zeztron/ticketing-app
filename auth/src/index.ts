import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

// Routes
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from "./routes/signup";

// Middlewares
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const PORT = 3000;
const app = express();
app.use(json());

// Implementing Routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// Implementing Middlewares
app.use(errorHandler);
app.all('*', async () => {
  throw new NotFoundError();
});

// 🚀
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));