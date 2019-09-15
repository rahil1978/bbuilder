import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bbuilder-7ae2d.firebaseio.com/'

});

export default instance; 