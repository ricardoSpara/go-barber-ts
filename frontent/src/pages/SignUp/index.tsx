import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import getValidationErros from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handlerSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 digitos'),
            });

            await schema.validate(data, { abortEarly: false });
        } catch (err) {
            const errors = getValidationErros(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Background />

            <Content>
                <img src={logoImg} alt="Logo" />
                <Form ref={formRef} onSubmit={handlerSubmit}>
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
