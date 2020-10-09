import { Router } from 'express';

import ForgotPasswordContoller from '../contollers/ForgotPasswordContoller';
import ResetPasswordContoller from '../contollers/ResetPasswordContoller';

const passwordRoutes = Router();
const forgotPasswordContoller = new ForgotPasswordContoller();
const resetPasswordContoller = new ResetPasswordContoller();

passwordRoutes.post('/forgot', forgotPasswordContoller.create);
passwordRoutes.post('/reset', resetPasswordContoller.create);

export default passwordRoutes;
