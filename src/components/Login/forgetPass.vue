<template>
    <div class="forget-container">
        <el-form ref="ForgetForm" class="login-form" hide-required-asterisk status-icon  aria-autocomplete="no" :model="ForgetForm" :rules="ForgetRules"  label-width="1rem">
            <div class="title-container">
                <h4>找回密码</h4>
            </div>
            <el-form-item prop="username" label="账号">
                <el-input name="username" type="text" v-model="ForgetForm.username" autoComplete="on" placeholder="请输入注册时的账号"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="email" label="电子邮箱">
                <el-input name="email" type="text" v-model="ForgetForm.email" autoComplete="on" placeholder="请输入注册时的电子邮箱"></el-input>
            </el-form-item> -->
            <el-form-item prop="iphone" label="手机号">
                <el-input name="iphone" type="text" v-model="ForgetForm.iphone" autoComplete="on" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="code" label="验证码" class="changeError">
                <span class="code" @click="changeCode()">{{this.code}}</span>
                <el-input v-model="ForgetForm.code" autoComplete="on" placeholder="验证码，区分大小写" style="width: 79%;"></el-input> -->
            <el-form-item prop="code" label="验证码">
                <el-input v-model="ForgetForm.code" autoComplete="on" placeholder="验证码，区分大小写">
                    <el-button slot="append" type="primary" @click="changeCode()" :disabled="disabled">{{codetips}}</el-button>
                </el-input>
            </el-form-item>
            <div class="outerDiv">
                <el-button type="primary" @click="submitForm('ForgetForm')">提交</el-button>
                <el-button @click="back()">返回</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { createCode, ValidateEmail, ValidateIphone, jump } from '../../untils/auth'
export default {
    name: 'ForgetPass',
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!value) {
                callback(new Error('用户名不能为空'))
            } else if (value.length < 1) {
                callback(new Error('用户名不能少于1位'));
            } else {
                callback()
            }
        }
        const validateEmail = (rule, value, callback) => {
            if (!value) {
                callback(new Error('电子邮箱不能为空'))
            } else if (!ValidateEmail(value)) {
                callback(new Error('电子邮箱格式不正确'))
            } else {
                callback()
            }
        }
        const validateIphone = (rule, value, callback) => {
            if (!value) {
                callback(new Error('手机号不能为空'))
            } else if (!ValidateIphone(value)) {
                callback(new Error('手机号格式不正确'))
            } else {
                callback()
            }
        }
        const validateCode = (rlue, value, callback) => {
            if (!value) {
                callback(new Error('请输入验证码'))
            }
            // else if (value !== this.code) {
            //     callback(new Error('输入验证码错误'))
            // }
            else {
                callback()
            }
        }
        return {
            codetips: '获取验证码',
            code: '',
            disabled: false,
            ForgetForm: {
                username: 'admin',
                email: '',
                iphone: '15700000000',
                code: ''
            },
            ForgetRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                email: [{ required: true, trigger: 'blur', validator: validateEmail }],
                iphone: [{ required: true, trigger: 'blur', validator: validateIphone }],
                code: [{ required: true, trigger: 'blur', validator: validateCode }],
            },
        }
    },
    created() {
        // this.changeCode()
    },
    methods: {
        jump,
        changeCode () {
            // this.code = createCode()
            this.ForgetForm.code = createCode();
            this.disabled = true;
            this.codetips = '60秒后获取';
            var self = this;
            var codeNum = 60;
            var timer = setInterval(function () {
                codeNum--;
                if (codeNum == 0) {
                    clearInterval(timer);
                    self.codetips = '获取验证码';
                    self.disabled = false;
                } else {
                   self.codetips = codeNum + '秒后获取' 
                }
            }, 1000)
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                // if (valid) {
                    // console.log(this.ForgetForm)
                    this.jump('changePass')
                // } else {
                //     console.log('error submit!!');
                //     return false;
                // }
            });
        },
        back () {
            window.history.back(-1);
        }
    }
}
</script>

<style>
    .forget-container {
        width: 6rem;
        background: #fff;
        padding: 0 0.4rem 0.4rem;
    }
    .forget-container .title-container {
        font-size: 0.18rem;
        margin: 0.4rem auto;
    }
    .forget-container .outerDiv {
        padding-top: 0.1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .forget-container .code {
        display: inline-block;
        width: 20%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.2rem;
        font-weight: bolder;
        border: 0.01rem solid #DCDFE6;
        vertical-align: middle;
        border-radius: 0.05rem;
        cursor: pointer;
    }
    .forget-container .changeError .el-form-item__error {
        left: 21%;
    }
</style>