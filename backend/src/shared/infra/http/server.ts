import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import bodyParser from 'body-parser';
import routes from './routes';
import '../typeorm';
import uploadConfig from '../../../config/upload';
import AppError from '../../errors/AppError';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(cors());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
