import { Router } from 'express';

import ForgotPasswordContoller from '../controllers/ForgotPasswordContoller';
import ResetPasswordContoller from '../controllers/ResetPasswordContoller';

const passwordRoutes = Router();
const forgotPasswordContoller = new ForgotPasswordContoller();
const resetPasswordContoller = new ResetPasswordContoller();

passwordRoutes.post('/forgot', forgotPasswordContoller.create);
passwordRoutes.post('/reset', resetPasswordContoller.create);

export default passwordRoutes;
