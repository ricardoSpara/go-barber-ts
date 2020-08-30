import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/respositories/UserRepository';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();

  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.run({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRoutes;
