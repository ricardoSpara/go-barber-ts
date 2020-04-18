import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import './database';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
