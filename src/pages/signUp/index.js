import React, { Component } from 'react';
import { Plataform } from 'react-native';

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
} from '../signIn/styles'

export default class SignUp extends Component {

    render() {
        return (
            <Background>
                <Container
                    behavior={Plataform === 'ios' ? 'padding' : ''}
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

                    <SubmitButton>
                        <SubmitText>Cadastar-se</SubmitText>
                    </SubmitButton>

                </Container>
            </Background>
        );
    }
}