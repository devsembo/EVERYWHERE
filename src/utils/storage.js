import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os items salvos.
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}


// Salvar um filme.
export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    // se tiver algum filme com o mesmo ID / ou duplicado precisamos ignorar.
    const hasMovie = moviesStored.some(item => item.id === newMovie.id)

    if(hasMovie){
        console.log("Este filme já existe na sua lista");
        return;
    }

    moviesStored.push(newMovie);
    
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme Salvo com sucesso");
}


// eliminar um filme pelo id.
export async function delteMovie(id){
    let moviesStored = await getMoviesSave('@apsolutions');

    let myMovies = moviesStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@apsolutions', JSON.stringify(myMovies));
    console.log('Filme deletado com sucesso!');
    return myMovies;
}


// verificar se o filme já faz parte dos ficheiros salvos.
export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@apsolutions');

    const hasMovie = moviesStored.find( item => item.id === movie.id)

    if (hasMovie){
        return true;
    }

    return false;
}