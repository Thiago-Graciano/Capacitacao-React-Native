import React, { useContext } from 'react';
import {
    Container,
    Message,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText
} from './styles';

import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <Container>
            <Header title="Meu Perfil"></Header>
                <Message numberOfLines={1}>
                    Olá, {user && user.name} bem vindo de volta!
                </Message>

                <NewLink onPress={() => navigation.navigate('Registrar')}>
                    <NewText>Fazer Registro</NewText>
                </NewLink>

                <LogoutButton onPress={() => signOut()}>
                    <LogoutText>Sair</LogoutText>
                </LogoutButton>
        </Container>
    )
}