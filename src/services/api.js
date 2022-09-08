import axios from 'axios';


// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3
// /movie/now_playing   &language=pt-PT&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=8788b006f197d302f03bbe6aa2799748&language=pt-PT&page=1

export const key = '8788b006f197d302f03bbe6aa2799748'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;

