import React from "react";
import { Container, Title, RateContainer, Rate, ActionContainer, DetailButton, DeleteButton } from './styles';

import { Ionicons, Feather } from '@expo/vector-icons'

function FavoriteItem({ data, delteMovie, navigatePage }){
    return(
        <Container>
            <Title size={22}>{data.title}</Title> 
            <RateContainer>
                <Ionicons name="md-star"   color="#FFD700"  size={12} />
                <Rate>{data.vote_average }/10</Rate>
            </RateContainer> 
               
            <ActionContainer>
                <DetailButton onPress={ () => navigatePage(data)}>
                    <Title size={14}>Ver Detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={ () => delteMovie(data.id) }>
                    <Feather name="trash" size={24} color="#FFF"/>
                </DeleteButton>

            </ActionContainer>
        </Container>
    )
}

export default FavoriteItem;