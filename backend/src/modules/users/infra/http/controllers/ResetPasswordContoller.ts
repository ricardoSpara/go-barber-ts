import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordContoller {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;
    const resetPasswordService = container.resolve(ResetPasswordService);

    await resetPasswordService.run({ password, token });

    return response.status(204).send();
  }
}