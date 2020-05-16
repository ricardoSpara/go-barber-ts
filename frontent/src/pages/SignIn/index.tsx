import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Logo" />
            <form action="">
                <h1>Faça seu login</h1>
                <input placeholder="Email" type="text" />
                <input type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>

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
