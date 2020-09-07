// import AppError from '@shared/errors/AppError';
import AuthenticateUserService from './AuthenticateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUserService.run({
      email: 'test@test.com',
      name: 'test',
      password: 'test@123',
    });

    const response = await authenticateUserService.run({
      email: 'test@test.com',
      password: 'test@123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});
