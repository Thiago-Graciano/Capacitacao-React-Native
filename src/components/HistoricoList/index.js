import React from 'react';
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText,
    Transacao
} from './styles';

import { TouchableWithoutFeedback, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({ data, deleteItem }) {

    function handleDeleteItem() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja deletar esse registro?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Continuar",
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container tipo={data.type}>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
                            size={20}
                            color="#FFF" />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                    <Transacao
                        tipo={data.type}
                        numberOfLines={1}
                    >
                        {data.description}</Transacao>

                </Tipo>

                <ValorText>
                    R$ {data.value.toFixed(2)}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}