import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUserService.run({
      email: 'test@test.com',
      name: 'test',
      password: 'test@123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same e-mail another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

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
