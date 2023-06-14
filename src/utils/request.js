
// 封装axios用于发送请求
import axios from "axios"
import { Promise } from "core-js/shim"

const request = axios.create({
    baseURL:'http://interview-api-t.itheima.net/', //接口基地址
    timeout:5000
})


// 添加响应拦截器
request.interceptors.response.use(
    // 1. 响应成功进入第一个函数   参数是响应对象
    function(response){
        // 对响应数据做点什么？
        return response.data
    },

    // 响应失败进入第二个函数  error是错误对象
    function(error){
        // 有错误响应，提示错误
        if(error.response){
            Toast(error.response.data.message)
        }
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

export default request