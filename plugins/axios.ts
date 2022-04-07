import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const service = axios.create({
    baseURL: process.env?.BASE_URL ?? 'https://test.elfinkingdom.com',
    timeout: 60_000,
});
// request
service.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = ''; 
        config.headers['Language'] = '';
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (res) => {
        if (!res || !res.data) {
            return Promise.reject(res);
        }
        return res.data;
    },
    (error) => {
        console.log('err', error);
        return Promise.reject(error);
    }
);

function get(url, params) {
    return service.get(url, { params: params });
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: {
                ...service,
                $get: get,
            },
        },
    };
});