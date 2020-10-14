import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsContoller from '../controllers/AppointmentsContoller';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRoutes = Router();
const appointmentsContoller = new AppointmentsContoller();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRoutes.use(ensureAuthenticated);

appointmentsRoutes.get('/me', providerAppointmentsController.index);

appointmentsRoutes.post('/', appointmentsContoller.create);

export default appointmentsRoutes;
