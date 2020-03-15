import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    const allowedOrigins = ['https://objective-einstein-06fb51.netlify.com/'];

    this.server.use(
      cors({
        origin(origin, callback) {
          if (!origin) return callback(null, true);
          if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
              'The CORS policy for this site does not ' +
              'allow access from the specified Origin.';
            return callback(new Error(msg), false);
          }
          return callback(null, true);
        },
      })
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
