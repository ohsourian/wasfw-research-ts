import express, { Application, ErrorRequestHandler, NextFunction, Request, Response, Router } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { UserRouter, ProductRouter } from './routes';

const app: Application = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// Web Route

// API Route
const ApiRouter: Router = Router({ mergeParams: true })
  .use('/user', UserRouter)
  .use('/product', ProductRouter);
app.use('/api', ApiRouter);

// Fallback
const fallback: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  switch (err.statusCode) {
    case 404:
      return res.status(404).send('Page Not Found');
    case 403:
      return res.status(403).send('Forbidden');
    default:
      return res.status(500).send('Server Error');
  }
};
app.use(fallback);

// Finally
app.listen(3000, '0.0.0.0', () => console.log('Listening on 3000'));
