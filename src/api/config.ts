/**
 * @author  B022MC
 * @date  2023/9/13 15:04
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */

import axios, {AxiosResponse} from 'axios'
import { ElMessage } from 'element-plus'

// 定义响应数据结构
interface ApiResponse {
    status: number;
    message?: string;
    data?: any;
    // 其他可能的字段
}
//创建axios实例
const Service = axios.create({
    // 设置baseURL地址
    baseURL: 'http://localhost:8080',
    //定义统一的请求头
    headers: {
        'Content-Type': "	application/json;charset=UTF-8"
    },
    //配置请求超时时间
    timeout: 10000
})

// 请求拦截器


// 定义响应拦截器
axios.interceptors.response.use(
    (response: AxiosResponse<ApiResponse>) => {
        const res = response.data;

        if (res.status === 0) {
            return response; // 返回 AxiosResponse 类型
        } else {
            ElMessage.error(res.message || '网络异常');
            return Promise.reject('Error'); // 这里可以根据需要返回一个错误
        }
    },
    (error) => {
        // 处理请求错误
        console.error('请求错误:', error);
        return Promise.reject(error);
    }
);

// 示例用法
axios.get('/api/some-endpoint')
    .then((response: AxiosResponse<ApiResponse>) => {
        // 这里的 response 包含了正确解析的响应数据
        console.log('响应数据:', response);
    })
    .catch((error) => {
        // 在这里处理请求错误
        console.error('请求错误:', error);
    });

export default Service
