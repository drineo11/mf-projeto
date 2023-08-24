// BAse da URL:https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=d4d6054dc2431ca02d6a78332215fbea&language=pt-BR


import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;