import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

import { classToClass } from 'class-transformer';

export default class UsersContoller {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.run({ name, email, password });

    return response.json(classToClass(user));
  }
}
