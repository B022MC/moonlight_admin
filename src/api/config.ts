/**
 * @author  B022MC
 * @date  2023/9/13 15:04
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'

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

//请求拦截器
// Service.interceptors.request.use((config) => {
//         // 检查config是否有效并具有headers属性
//         if (config && config.headers) {
//             // 配置请求头
//             config.headers.common['Authorization'] = window.sessionStorage.getItem('token') === null ? null : window.sessionStorage.getItem('token');
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

//响应拦截器
Service.interceptors.response.use((response) => {
    //获取接口返回结果
    const res = response.data
    if (res.status === 0) {
        return res
    }
    else {
        ElMessage.error(res.message || '网络异常')
        return res
    }
})

export default Service
