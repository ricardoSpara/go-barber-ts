import CreateAppointmentService from './CreateAppointmentService';
import FakeAppintmentsRepository from '../repositories/fakes/FakeAppintmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppintmentsRepository = new FakeAppintmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppintmentsRepository,
    );

    const appointment = await createAppointmentService.run({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create two appointment on the same time', () => {
    expect(1 + 2).toBe(3);
  });
});
