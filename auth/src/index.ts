import express from 'express';
import { json } from 'body-parser';

const PORT = 3000;
const app = express();
app.use(json());

app.get('/api/users/currentuser', (req: express.Request, res: express.Response) => {
  res.send('Hi there')
});

app.listen(3000, () => console.log(`Listening on Port ${PORT}`));