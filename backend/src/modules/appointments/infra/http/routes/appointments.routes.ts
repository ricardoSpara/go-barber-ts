import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRoutes = Router();

appointmentsRoutes.use(ensureAuthenticated);

// appointmentsRoutes.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();
//   return response.json(appointments);
// });

appointmentsRoutes.post('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository();
  const { provider_id, date } = request.body;
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.run({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRoutes;
