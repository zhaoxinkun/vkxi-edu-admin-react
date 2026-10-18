// token 处理
const tokenKey = "token";

export const getToken = () => sessionStorage.getItem(tokenKey);

export const setToken = token => sessionStorage.setItem(tokenKey, token);

export const removeToken = () => sessionStorage.removeItem(tokenKey);
