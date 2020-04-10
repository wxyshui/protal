import axios from 'axios';

let base = '';

//判断登录
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }