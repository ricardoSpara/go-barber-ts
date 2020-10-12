import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarContoller from '../controllers/UserAvatarContoller';

const usersRoutes = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const usersAvatarController = new UserAvatarContoller();

usersRoutes.post('/', usersController.create);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRoutes;
