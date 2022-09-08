import React from "react";
import Header from "../../components/Header";
import { Container, ListMovie } from './styles';

function Detail(){
    return(
        <Container>
            <Header
                title={"Netflix"}
            />
            
            <ListMovie
                data={[]}
            />
        </Container>
    )
}

export default Detail;