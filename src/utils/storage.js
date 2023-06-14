
const KEY = 'vant-mobile-exp-token'
// 直接按需导出 可以导出多个

// 获取KEY
export const getToken = ()=>{
    return localStorage.getItem(KEY)
}

// 设置KEY

export const setItem = (newItem)=> {
    localStorage.setItem(KEY, newItem)
}

// 删除

export const delToken = ()=>{
    localStorage.removeItem(KEY)
}