<template>
    <div class="register-container">
        <el-form ref="RegisterForm" class="login-form" hide-required-asterisk status-icon aria-autocomplete="no" :model="RegisterForm" :rules="RegisterRules" label-width="1rem">
            <div class="title-container">
                <h4>免费注册</h4>
            </div>
            <el-form-item prop="name" label="姓名">
                <el-input name="name" type="text" v-model="RegisterForm.name" autoComplete="on" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item prop="idcard" label="身份证号">
                <el-input name="idcard" type="type" v-model="RegisterForm.idcard" autoComplete="on" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item prop="username" label="账号">
                <el-input name="username" type="text" v-model="RegisterForm.username" autoComplete="on" placeholder="请设置账号"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input name="password" type="password" v-model="RegisterForm.password" autoComplete="on" placeholder="请设置密码"></el-input>
            </el-form-item>
            <el-form-item prop="again" label="确认密码">
                <el-input name="again" type="password" v-model="RegisterForm.again" autoComplete="on" placeholder="请确认密码"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="email" label="电子邮箱">
                <el-input name="email" type="text" v-model="RegisterForm.email" autoComplete="on" placeholder="请输入电子邮箱"></el-input>
            </el-form-item> -->
            <el-form-item prop="mechanism" label="请选择机构">
                <el-select v-model="RegisterForm.mechanism" placeholder="请选择" style="width: 100%;">
                    <el-option v-for="(item, index) of mList" :key="index" :label="item" :value="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="iphone" label="手机号">
                <el-input name="iphone" type="text" v-model="RegisterForm.iphone" autoComplete="on" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="code" label="验证码" class="changeError"> -->
                <!-- <span class="code" @click="changeCode()">{{this.code}}</span> -->
                <!-- <el-input v-model="RegisterForm.code" autoComplete="on" placeholder="验证码，区分大小写" style="width: 79%;"></el-input> -->
            <el-form-item prop="code" label="验证码">
                <el-input v-model="RegisterForm.code" autoComplete="on" placeholder="验证码，区分大小写">
                    <el-button slot="append" type="primary" @click="changeCode()" :disabled="disabled">{{codetips}}</el-button>
                </el-input>
            </el-form-item>
            <p class="check">用户协议：<el-checkbox v-model="checked">知识服务系统XXX协议</el-checkbox></p>
            <div class="outerDiv">
                <el-button type="primary" @click="submitForm('RegisterForm')">确认</el-button>
                <el-button @click="back()">返回</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { createCode, ValidateName, ValidateIdCard, ValidateEmail, ValidateIphone } from '../../untils/auth'
export default {
    name: 'Register',
    data() {
        const validateName = (rule, value, callback) => {
            if (!value) {
                callback(new Error('姓名不能为空'))
            } else if (!ValidateName(value)) {
                callback(new Error('姓名格式不正确'))
            } else {
                callback()
            }
        }
        const validateIdCard =(rule, value, callback) => {
            if (!value) {
                callback(new Error('身份证号不能为空'))
            } else if (!ValidateIdCard(value)) {
                callback(new Error('身份证格式不正确'))
            } else {
                callback()
            }
        }
        const validateUsername = (rule, value, callback) => {
            if (!value) {
                callback(new Error('用户名不能为空'))
            } else if (value.length < 1) {
                callback(new Error('用户名不能少于1位'));
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (!value) {
                callback(new Error('密码不能为空'))
            } else if (value.length < 6) {
                callback(new Error('密码不能少于6位'));
            } else {
                callback();
            }
        }
        const validateAgain = (rlue, value, callback) => {
            if (!value) {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.RegisterForm.password) {
                callback(new Error('两次输入密码不一致'))
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
            checked: false,
            code: '',
            disabled: false,
            RegisterForm: {
                name: '',
                idcard: '',
                username: '',
                password: '',
                again: '',
                email: '',
                mechanism: '',
                iphone: '',
                code: ''
            },
            mList: ['机构1', '机构2', '机构3', '机构4'],
            RegisterRules: {
                name: [{ required: true, trigger: 'blur', validator: validateName }],
                idcard: [{ required: true, trigger: 'blur', validator: validateIdCard }],
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }],
                again: [{ required: true, trigger: 'blur', validator: validateAgain }],
                email: [{ required: true, trigger: 'blur', validator: validateEmail }],
                mechanism: [{ required: true, message: '请选择机构', trigger: 'change' }],
                iphone: [{ required: true, trigger: 'blur', validator: validateIphone }],
                code: [{ required: true, trigger: 'blur', validator: validateCode }],
            },
        }
    },
    created() {
        // this.changeCode()
    },
    methods: {
        changeCode () {
            this.RegisterForm.code = createCode();
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
                if (valid) {
                    console.log(this.RegisterForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        back () {
            window.history.back(-1);
        }
    }
}
</script>

<style>
    .register-container {
        width: 6rem;
        background: #fff;
        padding: 0 0.4rem 0.4rem
    }
    .register-container .title-container {
        font-size: 0.18rem;
        margin: 0.4rem auto 0.2rem;
    }
    .register-container .outerDiv {
        padding-top: 0.1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .register-container .code {
        display: inline-block;
        width: 20%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.2rem;
        font-weight: bolder;
        border: 1px solid #DCDFE6;
        vertical-align: middle;
        border-radius: 0.05rem;
        cursor: pointer;
    }
    .register-container .changeError .el-form-item__error {
        left: 21%;
    }
    .register-container .check {
        display: inline-block;
        width: 3.15rem;
        text-align: center;
    }
</style>