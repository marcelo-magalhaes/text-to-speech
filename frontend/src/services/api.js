import axios from 'axios';


const api = axios.create({
    baserURL: 'http://localhost:3333'
});

export default api;

