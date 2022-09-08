
// gerar uma lista de filme com o tamanho que eu desejar.
export function getListMovies(size, movies){
    let popularMovies = [];

    for(let i = 0, l = size; i < l; i++){
        popularMovies.push(movies[i])
    }

    return popularMovies;

}

// Gerar um numero aleatorio com base a lista de filmes que eu passar 
export function randomBanner(movies){
    return Math.floor(Math.random() * movies.length)
}