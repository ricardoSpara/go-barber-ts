import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    function handlerSubmit(data: object): void {
        console.log(data);
    }

    return (
        <Container>
            <Background />

            <Content>
                <img src={logoImg} alt="Logo" />
                <Form onSubmit={handlerSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input
                        name="name"
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
                </Form>

                <a href="#criar">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
