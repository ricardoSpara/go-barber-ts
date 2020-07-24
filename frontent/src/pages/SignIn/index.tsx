import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {Form} from '@unform/web';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Logo" />
            <form action="">
                <h1>Faça seu login</h1>
                <Input
                    name="email"
                    icon={FiMail}
                    type="email"
                    placeholder="Email"
                />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit">Entrar</Button>

                <a href="#forgot">Esqueci minha senha</a>
            </form>

            <a href="#criar">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
