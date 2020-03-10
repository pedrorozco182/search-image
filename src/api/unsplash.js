import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6RPAn_-bA82A_GNdLWT0GU5EosdjvbQtLlIgNvDezIE'
    }

});