import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import getValidationErros from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();

    const handlerSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'),
                    password: Yup.string().required('Senha é obrigatória'),
                });

                await schema.validate(data, { abortEarly: false });

                signIn({ email: data.email, password: data.password });
            } catch (err) {
                const errors = getValidationErros(err);

                formRef.current?.setErrors(errors);
            }
        },
        [signIn],
    );

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo" />
                <Form ref={formRef} onSubmit={handlerSubmit}>
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
                </Form>

                <a href="#criar">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
