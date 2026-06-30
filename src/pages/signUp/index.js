import React, { useContext } from 'react';
import { Platform, Alert } from 'react-native';

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

    const { user } = useContext(AuthContext)

    function handleSignUp(){
        console.log(user.nome)
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
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder='Digite seu E-mail'
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder='Digite sua Senha'
                        />
                    </AreaInput>

                    <SubmitButton onPress={handleSignUp} >
                        <SubmitText>Cadastar-se</SubmitText>
                    </SubmitButton>

            </Container>
        </Background>
    );
}