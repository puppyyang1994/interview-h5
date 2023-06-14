import request from "@/utils/request"


// 封装注册接口
export const registerAPI = data =>{
    return request.post('/h5/user/register', data)
}

// 封装登录接口
export const loginAPI = (data) =>{
    return request.post('/h5/user/login', data)
}