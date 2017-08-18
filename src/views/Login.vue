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
                <mu-raised-button label="Primary" class="demo-raised-button login-btn" primary @click="login" />
            </div>
        </div>
    </div>
</template>

<script>
var logo = require('../assets/img/logo.png')

export default {
    data() {
        return {
            logo,
            errorAccount:'',
            errorPassword:'请输入密码',
            account:'11',
            password:''
        }
    },
    methods: {
        login() {
            this.$router.push('/home')
        }
    }
}
</script>
<style>

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
}
</style>

