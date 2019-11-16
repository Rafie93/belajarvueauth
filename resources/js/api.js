import axios from 'axios';
import store from './store.js'

const $axios = axios.create({
    baseURL: 'https://oauth.itdevelopment.id/',
    headers: {
        Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + JSON.stringify(localStorage.getItem('token')):'',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE"
    }
});

$axios.interceptors.request.use (
    function (config) {
        const token = store.state.token
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

export default $axios;