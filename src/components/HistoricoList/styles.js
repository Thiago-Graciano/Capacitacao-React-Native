import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.tipo === "despesa" ?  "rgba(198, 44, 54, 0.12)" : "rgba(4, 147, 1, 0.12)"};
    border-radius: 4px;
    margin: 0 10px 14px 10px;
    padding: 12px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
    margin-left: 4px;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === "despesa" ?  "#C62C36" : "#049301"};
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 4px;
`;

export const ValorText = styled.Text`
    color: #121212;
    font-size: 22px;
    font-weight: bold;
`;