import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { classToClass } from 'class-transformer';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const uploadUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await uploadUserAvatar.run({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
