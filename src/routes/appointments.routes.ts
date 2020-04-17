import { Router } from 'express';
import { parseISO, startOfHour } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';

const appointmentsRoutes = Router();
const appointmentRepository = new AppointmentRepository();

appointmentsRoutes.get('/', (request, response) => {
  const appointments = appointmentRepository.all();
  return response.json(appointments);
});

appointmentsRoutes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointmentRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'this appointment is already booked' });
  }

  const appointment = appointmentRepository.create({
    provider,
    date: parsedDate,
  });
  return response.json(appointment);
});

export default appointmentsRoutes;
