<template>
    <div class="login-page">
        <img :src="logo" class="logo">
        <div class="form">
            <div class="group">
                <mu-text-field label="用户名" hintText="请输入手机号或邮箱" type="text" labelFloat icon="perm_identity" :errorText="errorAccount" v-model="account" />
            </div>
            <div class="group">
                <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat icon="lock_outline" :errorText="errorPassword" v-model="password"/>
            </div>
            <div class="group">
                <mu-raised-button label="登陆" class="demo-raised-button login-btn" primary @click="login" />
            </div>
        </div>
        <mu-toast class="toast" v-if="toast" message="登陆失败:账号或密码错误" />
    </div>
</template>

<script>
const store = require('storejs')
const logo = require('../assets/img/logo.png')

export default {
    data() {
        return {
            logo,
            errorAccount:'',
            errorPassword:'',
            account:'',
            password:'',
            toast:false
        }
    },
    activated(){
       if(store.has('user')){
           this.$router.push('/')
       }
    },
    watch:{
        account(val){
            if(val.length > 0){
                 this.errorAccount = ''
            }
        },
        password(val){
             if(val.length > 0){
                 this.errorPassword = ''
            }
        }
    },
    methods: {
        login() {
            if(!this.account){
                this.errorAccount = '请输入用户名'
                return
            }
            if(!this.password){
                this.errorPassword = '请输入密码'
                 return
            }

            if(this.account == 'justyeh' && this.password == '123456'){
                store.set('user',{
                    account:this.account,
                    password:this.password
                })
                this.$router.push(this.$route.query.redirect || '/home')
            }else{
                this.toast = true
                setTimeout(() => {
                    this.toast = false;
                }, 1000)
            }
        }
    }
}
</script>
<style>
.login-page .mu-text-field.has-icon{
    padding-left:32px;
}
.login-page .mu-text-field-icon{
    left:0;
}
.login-page .mu-text-field-help,
.login-page .mu-text-field hr{
    left:32px !important;
}
</style>

<style scoped>
.login-page {
    padding: 50px 0;
}

.logo {
    display: block;
    margin: 0 auto;
    width: 115px;
}

.form {
    padding-top: 20px;
}

.group {
    display: flex;
    justify-content: center;
}

.login-btn {
    width: 256px;
    margin-top:20px;
    height:40px;
}
.toast {
    position: fixed;
    bottom: 100px;
    left: 0;
    right: 0;
    margin: auto;
    width: 250px;
    background: #04acf7;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
</style>

