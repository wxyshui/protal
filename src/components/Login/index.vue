<template>
    <el-container>
        <el-header class="login-header">
            <el-row>
                <el-col :span="12" class="login_logo">
                    <img src="../../assets/images/home.png" alt="logo">
                    <p class="logo_title">中国轨道门户行业知识服务平台</p>
                </el-col>
                <el-col :span="12" class="login_title">
                    <p>首页</p>
                    <p>知识服务平台</p>
                </el-col>
            </el-row>
        </el-header>
        <div class="login-main">
            <router-view></router-view>
        </div>
        <el-footer class="login-footer" style="height: 100px;">
            <ul>
                <li v-for="(item, index) of footList" :key="index">
                    {{item}}
                </li>
            </ul>
            <p>©2019-2029 jiaotong.con 版权搜友ICP证：京C2-20190302</p>
            <p>浙公网安备 33010602009975号</p>
        </el-footer>
    </el-container>
</template>

<script>
import { getUser } from '../../untils/auth'
export default {
    name: 'LoginIndex',
    data() {
        return {
            footList: ['网站首页', '帮助中心', '联系我们', '隐私政策', '广告服务', '意见反馈'],
        }
    },
    // created () {
    //     if (getUser()) {
    //         window.history.back(-1)
    //     }
    // }
}
</script>

<style>
    .login-header {
        background: #E1FFFF;
    }
    .login_logo {
        height: 0.6rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .login_logo img {
        margin-right: 0.1rem;
    }
    .login_logo .logo_title {
        font-weight: bold;
    }
    .login_title {
        height: 0.6rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0.2rem;
    }
    .login_title p {
        font-size: 0.2rem
    }
    .login-main {
        height: 7.55rem;
        background: #add8e6;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0 1.7rem;
    }
    .login-footer {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.5rem;
        font-size: 0.16rem;
    }
    .login-footer ul {
        width: 4.7rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 0.25rem;
    }
    .login-footer p {
        color: #d3d3d3;
        margin-bottom: 0.15rem;
    }
</style>