import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
} from '../signIn/styles'

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if(nome === '' || email === '' || password === ''){

        }

        signUp(nome, email, password);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder='Digite seu Nome'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite seu E-mail'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite sua Senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp} >

                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fefefe" />
                        ) : (
                            <SubmitText>Cadastar-se</SubmitText>
                        )
                    }

                </SubmitButton>

            </Container>
        </Background>
    );
}