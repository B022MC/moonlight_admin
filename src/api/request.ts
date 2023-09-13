/**
 * @author  B022MC
 * @date  2023/9/13 15:05
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */
import Service from "./config";
import {AxiosRequestConfig, AxiosResponse} from "axios";

// 封装 GET 请求
const get = (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    return Service({
        ...config,
        method: 'get',
        params: config.data,
    });
};

// 封装 POST 请求
const post = (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    return Service({
        ...config,
        method: 'post',
        data: config.data,
    });
};

// 示例用法
/*get({
    url: '/api/getData',
    data: { id: 123 },
})
    .then((response: AxiosResponse) => {
        // 处理成功响应
        console.log(response);
    })
    .catch((error) => {
        // 处理请求失败
        console.error(error);
    });*/
export default {
    get,
    post
}