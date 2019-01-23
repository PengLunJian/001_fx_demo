import Axios from 'axios';
import apis from '../apis';

const getConfig = (config) => {
    const {data} = config;
    const opts = config.url;
    config.method = apis.method;
    config.timeout = apis.timeout;
    config.headers = apis.headers;
    if (data) {
        const {url, params} = opts;
        config.url = apis.baseUrl + url;
        config.data = Object.assign(params, data);
    } else {
        const {url} = opts;
        config.url = apis.baseUrl + url;
    }
    return config;
}

Axios.interceptors.request.use(
    (config) => {
        const CONFIG = getConfig(config);
        return CONFIG;
    }, (error) => {
        return Promise.reject(error);
    });

Axios.interceptors.response.use(
    (response) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response.data);
            }, 1000);
        });
    }, (error) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(error.response);
            }, 1000);
        });
    });

export default Axios;