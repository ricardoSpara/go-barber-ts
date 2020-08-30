import { Router } from 'express';
import AuthenticateUserService from '../../../../modules/users/services/AuthenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.run({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRoutes;
