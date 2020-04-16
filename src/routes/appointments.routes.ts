import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRoutes = Router();

const appointments = [];

appointmentsRoutes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  response.json(appointment);
});

export default appointmentsRoutes;
