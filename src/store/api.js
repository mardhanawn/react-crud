import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com/films',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
