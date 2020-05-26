import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
        <Background />

        <Content>
            <img src={logoImg} alt="Logo" />
            <form action="">
                <h1>Faça seu cadastro</h1>

                <Input
                    name="nome"
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />

                <Input name="email" icon={FiMail} placeholder="Email" />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit">Cdastrar</Button>
            </form>

            <a href="#criar">
                <FiArrowLeft />
                Voltar para Logon
            </a>
        </Content>
    </Container>
);

export default SignUp;
