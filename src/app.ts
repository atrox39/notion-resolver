import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express, { json, type Application, urlencoded } from 'express';
import api from './routes/api';

dotenv.config();

const app:Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));

app.use('/api', api);

app.get('/', (_, res) => {
  return res.status(200).json({ status: 200, message: 'Ok' });
});

export default app;
