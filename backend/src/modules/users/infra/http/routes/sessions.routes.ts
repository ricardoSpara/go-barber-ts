import { Router } from 'express';

import SessionController from '../controllers/SessionsController';

const sessionsRoutes = Router();
const sessionController = new SessionController();

sessionsRoutes.post('/', sessionController.create);

export default sessionsRoutes;
