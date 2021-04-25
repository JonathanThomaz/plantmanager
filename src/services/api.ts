import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JonathanThomaz/plantmanager'
})

export default api;