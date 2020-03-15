import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.send('ok'));

routes.post('/create', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.get('/auth', (req, res) =>
  res.json({ message: "You're authenticated." })
);

routes.get('/data', UserController.index);

export default routes;
