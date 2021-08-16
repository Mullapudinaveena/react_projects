import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aHSqmehUf-8Jg8SCxkgCWmeIP1qdnn2Zqi-gR337Heg'
    }
});