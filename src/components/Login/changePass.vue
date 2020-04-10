<template>
    <div class="change-main">
        <div class="change-container">
            <div class="title">修改密码</div>
            <div class="main">
                <el-steps :active="active" align-center finish-status="success">
                    <el-step title="验证身份"></el-step>
                    <el-step title="修改密码"></el-step>
                    <el-step title="成功"></el-step>
                </el-steps>
                <!-- 修改密码页面 -->
                <el-form ref="ChangeForm" class="change-form" hide-required-asterisk status-icon aria-autocomplete="no" :model="ChangeForm" :rules="ChangeRules" label-width="1rem" id="step2">
                    <el-form-item prop="password" label="新密码">
                        <el-input style="width: 86%;" name="password" type="password" v-model="ChangeForm.password" autoComplete="on" placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="again" label="确认密码">
                        <el-input style="width: 86%;" name="again" type="password" v-model="ChangeForm.again" autoComplete="on" placeholder="再次输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" style="width: 86%;" @click="submitForm('ChangeForm')">下一步</el-button>
                    </el-form-item>
                </el-form>
                <!-- 结果页面 -->
                <div class="change-form" id="step3">
                    <div class="outer">
                        <div id="loading">
                            <div>
                                <i class="el-icon-loading" style="font-size: 0.4rem;"></i>
                                <p>请等待</p>
                            </div>
                        </div>
                        <div id="success" style="display: none;">
                            <div>
                                <i class="el-icon-check" style="font-size: 0.4rem;"></i>
                                <p>密码修改成功</p>
                            </div>
                        </div>
                        <el-button type="success" :disabled="disable" @click="Jump()">去登陆</el-button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    
</template>

<script>
import { jump, setTokenKey } from '../../untils/auth'
import $ from 'jquery'
export default {
    name: 'ChangePass',
    components: {
    },
    data() {
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
            } else if (value !== this.ChangeForm.password) {
                callback(new Error('两次输入密码不一致'))
            } else {
                callback()
            }
        }
        return {
            ChangeForm: {
                password: '111111',
                again: '111111'
            },
            ChangeRules: {
                password: [{ required: true, trigger: 'blur', validator: validatePassword }],
                again: [{ required: true, trigger: 'blur', validator: validateAgain }],
            },
            active: 1,
            disable: true,
            
        }
    },
    methods: {
        jump,
        Jump () {
            setTokenKey('url',this.$route.path);
            this.jump('/login')
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ChangeForm)
                    this.active = 2;
                    $('#step2').hide();
                    $('#step3').show();
                    var self = this;
                    setTimeout(function () {
                        $('#success').show();
                        $('#loading').hide();
                        self.active = 3;
                        self.disable = false;
                    }, 3000)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>


<style lang="stylus" scoped>
    .change-main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .change-container {
        width: 90%;
        height: 80%;
        background: #fff;
        padding: 0px 0.5rem;
    }
    .change-container .title {
        font-size: 0.2rem;
        border-bottom: 0.01rem solid #dcdfe6;
        padding: 0.3rem 0;
    }
    .change-container .main {
        width: 60%;
        margin: 0.3rem auto 0;
    }
    .change-container .main .change-form {
        width: 65%;
        margin: 0.5rem auto;
    }
    .change-container .main #step3 {
        display: none;
        height: 1.6766rem;
    }
    .change-container .main #step3 .outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .change-container .main #step3 .outer #loading div, .change-container .main #step3 .outer #success div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .change-container .main #step3 .outer i {
        margin: 0.1rem auto 0.2rem;
    }
    .change-container .main #step3 .outer .el-button {
        margin: 0.41rem auto 0;
        width: 86%;
    }
</style>