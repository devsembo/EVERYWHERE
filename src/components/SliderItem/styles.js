import styled from 'styled-components/native';
import { Image } from 'react-native';
export const Container = styled.TouchableOpacity`
    padding: 15px;
    padding-bottom: 17px;
    padding-right: 17px;
    width: 140px;
    height: 180px;
`;

export const BannerItem = styled.Image`
    width: 100%;
    height: 170px;
    width: 130px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 14px;
    padding-top: 8px;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Rate = styled.Text`
    padding-left: 4px;
    color: #FFF;
    font-size: 12px;
`;
