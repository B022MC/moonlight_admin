/**
 * @author  B022MC
 * @date  2023/9/13 15:05
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */
import login from './request'
import {AxiosResponse} from "axios";

interface ApiData {
    // 定义 data 参数的类型
    // 这里可以根据你的实际需求添加属性
    // 例如：username: string, password: string, 等等
    [key: string]: any;
}

const loginApi = (data: ApiData): Promise<AxiosResponse> => {
    return login.post({
        url: '/user/login',
        data
    });
};

const registerApi = (data: ApiData): Promise<AxiosResponse> => {
    return login.post({
        url: '/user/add',
        data
    });
};



export default {
    loginApi,
    registerApi
}
