import Cookies from 'js-cookie'
import { requestLogin } from '../../api/api'

const user = {
    state: {
        user: '',
    },
    actions: {
        // 用户名登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                requestLogin(userInfo).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user;