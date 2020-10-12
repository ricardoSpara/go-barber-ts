import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;
describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.run({
      email: 'test@test.com',
      name: 'test',
      password: 'test@123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same e-mail another', async () => {
    await createUserService.run({
      email: 'test@teste.com',
      name: 'test',
      password: 'test@123',
    });

    await expect(
      createUserService.run({
        email: 'test@teste.com',
        name: 'test',
        password: 'test@123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
