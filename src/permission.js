import router from './router/index'
import store from './store'
import { Message } from 'element-ui'
import { getUser } from './untils/auth'


router.beforeEach((to, from, next) => {
    if (to.path.indexOf('/personalcenter') == 0) {
        if (getUser()) {
            let roles = JSON.parse(getUser()).roles;
            store.dispatch('GenerateRoutes', {roles}).then(() => {
                router.addRoutes(store.getters.addRouters)
            })
            next()
        } else {
            next('/login')
        }
    } else {
        if (getUser()) {
            let roles = JSON.parse(getUser()).roles;
            store.dispatch('GenerateRoutes', {roles}).then(() => {
                router.addRoutes(store.getters.addRouters)
            })
            next()
        } else {
            next()
        }
    }
})