import express from 'express';
import { json } from 'body-parser';

const PORT = 3000;
const app = express();
app.use(json());

app.listen(3000, () => console.log(`Listening on Port ${PORT}`));