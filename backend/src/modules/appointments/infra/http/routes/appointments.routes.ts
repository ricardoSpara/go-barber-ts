import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsContoller from '../controllers/AppointmentsContoller';

const appointmentsRoutes = Router();
const appointmentsContoller = new AppointmentsContoller();

appointmentsRoutes.use(ensureAuthenticated);

// appointmentsRoutes.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();
//   return response.json(appointments);
// });

appointmentsRoutes.post('/', appointmentsContoller.create);

export default appointmentsRoutes;
