import React, { Component } from 'react';
import { Platform } from 'react-native';

import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from './styles'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Digite seu E-mail"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua Senha"
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} >
                    <SubmitText>
                        Acessar
                    </SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')} >
                    <LinkText>Criar uma Conta!</LinkText>
                </Link>
            </Container>
        </Background>
    );
}