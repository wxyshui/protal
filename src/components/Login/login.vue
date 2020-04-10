<template>
    <div class="login-container">
        <el-form ref="loginForm" class="login-form" aria-autocomplete="no" :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h4>密码登录</h4>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱/会员名/8位ID"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输入登录密码"></el-input>
            </el-form-item>
            <el-button type="primary" style="width: 100%;margin-bottom: 0.22rem;" :loading='loading' @click.native.prevent="handleLogin">登录</el-button>
            <div class="outerDiv">
                <el-link style="margin-right: 0.1rem;" @click="jump('forgetPass')">忘记密码</el-link>
                <el-link @click="jump('register')">免费注册</el-link>
            </div>
        </el-form>
    </div>
</template>

<script>
import { jump, setUser, getTokenKey, removeTokenKey } from '../../untils/auth'
export default {
    name: 'Login',
    data() {
        const validateUsername = (rule, value, callback) => {
            if (value.length < 1) {
                callback(new Error('用户名不能少于1位'));
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('密码不能少于6位'));
            } else {
                callback();
            }
        };
        return {
            loading: false,
            loginForm: {
                username: 'admin',
                password: '111111'
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
        }
    },
    methods: {
        jump,
        handleLogin () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store.dispatch('Login',this.loginForm).then((res) => {
                        if (res.code === 200) {
                            // 登录成功
                            this.loading = false;
                            setUser(JSON.stringify(res.user))
                            if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.indexOf('Opear') < 0)) {
                                // IE
                                if (window.history.length > 0) {
                                    if (!getTokenKey('url')) {
                                        window.history.back(-1)
                                    } else {
                                        removeTokenKey('url')
                                        this.jump('/')
                                    }
                                } else {
                                    removeTokenKey('url')
                                    this.jump('/')
                                }
                            } else {
                                // 非IE
                                if (navigator.userAgent.indexOf('Firefox') >= 0 || navigator.userAgent.indexOf('Opear') >= 0 || navigator.userAgent.indexOf('Safari') >= 0 || navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('WebKit') >= 0) {
                                    // 查看是否从其他页面跳转过来
                                    if (window.history.length > 1) {
                                        // 查看是否从不需要返回的页面跳转过来
                                        if (!getTokenKey('url')) {
                                            // 如果不是，跳转回上一页
                                            window.history.back(-1)
                                        } else {
                                            // 如果是，跳转到总首页
                                            removeTokenKey('url')
                                            this.jump('/portal')
                                        }
                                    } else {
                                        removeTokenKey('url')
                                        this.jump('/portal')
                                    }
                                }
                            }
                        } else {
                            this.$message.error(res.msg);
                            this.loading = false
                        }
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        }
    }
}
</script>

<style>
    .login-container {
        width: 6rem;
        background: #fff;
        padding: 0 0.4rem 1rem;
    }
    .login-container .title-container {
        font-size: 0.18rem;
        margin: 0.4rem auto;
    }
    .login-container .outerDiv {
        padding-top: 0.1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }
</style>