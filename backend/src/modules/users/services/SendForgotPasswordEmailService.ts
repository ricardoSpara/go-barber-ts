// import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
// import User from '../infra/typeorm/entities/User';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async run({ email }: IRequest): Promise<void> {
    const checkUserEmail = await this.usersRepository.findByEmail(email);

    if (!checkUserEmail) {
      throw new AppError('User does not exists');
    }

    this.mailProvider.sendMail(email, 'Pedido de recuperação se senha');
  }
}

export default SendForgotPasswordEmailService;
