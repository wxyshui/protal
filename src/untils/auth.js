import Cookies from 'js-cookie';

export function createCode(){/* 生成验证码的函数 */
    var code = "";
    var codeLength = 4;
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    for(var i = 0; i < codeLength; i++){
        var charIndex = Math.floor(Math.random()*62);
        code += selectChar[charIndex];
    }
    return code
}
// 姓名验证
export function ValidateName(name) {
    const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//验证姓名正则
    return reg.test(name)
}
// 身份证验证
export function ValidateIdCard(idcard) {
    const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return reg.test(idcard)
}
// 电子邮件验证
export function ValidateEmail(email) {
    const reg = /^\w{3,}(\.\w+)*@[A-z 0-9]+(\.[A-z]{2,5}){1,2}$/;
    return reg.test(email)
}
// 手机号验证
export function ValidateIphone(iphone) {
    const reg = /^1[3456789]\d{9}$/;
    return reg.test(iphone)
}
// 路由跳转
export function jump(str) {
    this.$router.push({ path: str })
}

const UserKey = 'user';
// 添加登录用户
export function setUser(json) {
    return sessionStorage.setItem(UserKey, json)
}
// 获取登录用户
export function getUser() {
    return sessionStorage.getItem(UserKey)
}
// 删除登录用户
export function removeUser() {
    return sessionStorage.removeItem(UserKey)
}

export function setTokenKey(TokenKey, token) {
    return sessionStorage.setItem(TokenKey, token)
}

export function getTokenKey(TokenKey) {
    return sessionStorage.getItem(TokenKey)
}

export function removeTokenKey(TokenKey) {
    return sessionStorage.removeItem(TokenKey)
}