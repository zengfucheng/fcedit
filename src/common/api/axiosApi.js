/**
 *
 * name: axios
 * date: 2019/1/29
 * author: cengfucheng
 * about: 封装的axios
 *
 */
import axios from 'axios';
import store from '@/store';
import Router from 'vue-router';
import { showLoading, hideLoading} from '@/components/MyLoading';

let router = new Router();
// const CancelToken = axios.CancelToken;
// import qs from 'qs';
if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://127.0.0.1:3000';
}else if(process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://127.0.0.1:3000';
}

axios.interceptors.request.use(
    config => {
        showLoading();

        // console.log(store.state.user.token,'数据库');       // 两种获取store值的方法
        // console.log(store.getters.token,'数据库');
        console.log(config,'请求数据');

        // qs.stringify(config.data);

        if(config.data && typeof config.data != 'string') {
            config.data = JSON.stringify(config.data);
        }

        // console.log(config.data);

        let method = config.method.toLowerCase();
        if (method === 'get' || method === 'head') {
            if (config.data) {
                config.params = config.data;
                config.maxContentLength = 147483648;
                delete config.data
            }
        } else {
            if (config.data) {
                // config.data = config.data;
                config.maxContentLength = 2147483648;
            }
        }
        config.headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
        }
        // console.log('请求前：', config);
        return config
    },
    error => {
        // console.log('请求错误：', error);
        hideLoading();
        errFn(error);
    }
);
axios.interceptors.response.use(
    config => {
        hideLoading();
        console.log('请求结果1：',config)
        return config
    },
    error => {
        // 服务器状态码不是2开头的的情况
        // 这里可以跟你们的后台开发人员协商好统一的错误状态码
        // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
        // 下面列举几个常见的操作，其他需求可自行扩展
        let { response } = error;
        if(response) {
            switch (response.status) {
                case 401:
                    // 未登陆
                    console.log('未登录')
                    console.log(router)
                    console.log(router.currentRoute.fullPath)
                    router.replace({
                        path: '/login',
                        name: 'Login',
                        // params: {
                        //     redirect: router.currentRoute.fullPath
                        // }
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 403:
                    // token过期
                    break;
                case 404:
                    // 请求错误，不存在的请求
                    break;
            }
        }else {
            console.log('断网');
        }
        // console.log('请求结果错误：', error);
        hideLoading();
        errFn(error);
    }
);

function handlePromis (options) {
    return new Promise((resolve, reject) => {
        let data = axios(options);
        if (data) {
            return resolve(data);
        }
        return reject(data);
    })
};

async function axiosHandle (options, fn, errFn) {
    let data = await handlePromis(options,fn, errFn);
    console.log('请求结果2：',data);
    if (data) fn(data);
}

let sucessFn = () => {};                // 本地存储请求成功方法
let errFn = () => {};                   // 本地存储请求错误方法


export default ({ api, method = 'get', data = {}, timeout = 10000, handleEvs = () => {}, errorEvs = () => {}, abort = () => {} }) => {
    let options = {
        url: api,
        method: method.toUpperCase(),
        data: data,
        timeout: timeout,
        // cancelToken: new CancelToken( (cancelToken) => abort= cancelToken)
    }
    sucessFn = handleEvs;
    errFn = errorEvs;
    axiosHandle(options, handleEvs, errorEvs, abort)
}
