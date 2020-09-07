import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.run({
      email: 'test@teste.com',
      name: 'test',
      password: 'test@123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same e-mail another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    await createUserService.run({
      email: 'test@teste.com',
      name: 'test',
      password: 'test@123',
    });

    expect(
      createUserService.run({
        email: 'test@teste.com',
        name: 'test',
        password: 'test@123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
