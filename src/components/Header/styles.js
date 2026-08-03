import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 15px;
    width: 100%;
    max-height: 60px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #121212;
    margin-left: 8px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding-right: 8px;
`;