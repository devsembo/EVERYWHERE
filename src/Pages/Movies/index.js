import React, { useEffect, useState } from "react";
import Header from '../../components/Header';

import { Container, ListMovies } from './styles';

import { getMoviesSave, delteMovie } from '../../utils/storage';

import FavoriteItem from '../../components/FavoriteItem'
import { useNavigation, useIsFocused } from '@react-navigation/native';

function Movies() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFovriteMovies() {
            const result = await getMoviesSave('@apsolutions')

            if (isActive) {
                setMovies(result);
            }

        }

        if (isActive) {
            getFovriteMovies();
        }

        return () => {
            isActive = false
        }

    }, [isFocused]);

    async function handleDelete(id){
        const result = await delteMovie(id);
        setMovies(result);
    }

    function NavigateDetailPage(item){
        navigation.navigate('Detail', { id: item.id})
    }

    return (
        <Container>
            <Header
                title="Favoritos"
            />

            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={ item => String(item.id) }
                renderItem={ ({ item}) => (
                 <FavoriteItem
                    data={item} 
                    delteMovie={ handleDelete }
                    navigatePage={ () => NavigateDetailPage(item) }
                 />   
                )}
            />
        </Container>
    )
}
export default Movies; 