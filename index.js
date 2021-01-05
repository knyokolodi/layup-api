import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import users from './routes/userRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Running server in ${process.env.NODE_ENV} on port ${PORT}`)
);
