/**
 * @author  B022MC
 * @date  2023/9/19 22:46
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */
import list from './request'
import {AxiosRequestConfig, AxiosResponse,} from "axios";

// interface ApiData {
//     // 定义 data 参数的类型
//     // 这里可以根据你的实际需求添加属性
//     // 例如：username: string, password: string, 等等
//     [key: string]: any;
// }

const getUserlistApi = (): Promise<AxiosResponse> => {
    // 在请求头中添加Bearer Token
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: window.sessionStorage.getItem('token'), // 添加Token
        },
    };
    // @ts-ignore
    return list.post({
        url:'/user/list',
        config
    })
}

export default {
    getUserlistApi
}
