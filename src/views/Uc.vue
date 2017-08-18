<template>
    <div class="me-page">
        <div class="user">
            <div class="header" :style="{backgroundImage:'url('+  headImg +')'}"></div>
            <p class="name">JustYeh</p>
            <mu-icon-menu icon="more_vert" class="drop" iconClass="drop-icon" menuClass="drop-menu" menuListClass="drop-menu-list">
                <mu-menu-item title="设置" />
            </mu-icon-menu>
        </div>
        <mu-list>
            <mu-sub-header>我的蓝桥杯</mu-sub-header>
            <mu-list-item title="我的订单" to="/uc/order">
                <mu-icon value="reorder" slot="leftAvatar" />
            </mu-list-item>
           <!--  <mu-list-item title="我的证书" to="/uc/certificate">
                <mu-icon value="book" slot="leftAvatar" />
            </mu-list-item> -->
            <mu-list-item title="获奖记录" to="/uc/award">
                <mu-icon value="card_membership" slot="leftAvatar" />
            </mu-list-item>
            <mu-list-item title="认证信息" to="/uc/auth">
                <mu-icon value="chrome_reader_mode" slot="leftAvatar" />
            </mu-list-item>
            <mu-list-item title="关于蓝桥杯" to="/uc/about">
                <mu-icon value="perm_identity" slot="leftAvatar" />
            </mu-list-item>
        </mu-list>
        <mu-divider />
        <mu-list>
            <mu-sub-header>个人中心</mu-sub-header>
            <!--  <mu-list-item title="我的地址" to="/uc/address">
                    <mu-icon value="place" slot="leftAvatar" />
                </mu-list-item> -->
            <mu-list-item title="账号设置" to="/uc/settings">
                <mu-icon value="settings" slot="leftAvatar" />
            </mu-list-item>
            <mu-list-item title="我的消息" to="uc/message">
                <mu-icon value="sms" slot="leftAvatar" />
            </mu-list-item>
        </mu-list>
    
    </div>
</template>

<script>
var headImg = require('../assets/img/head.jpg')

export default {
    data() {
        return {
            headImg,
            showAbout: false
        }
    },
    methods: {
    }
}
</script>

<style>
.me-page .drop-icon {
    color: #fff;
}

.drop-menu-list {
    padding: 0;
}
</style>


<style scoped>
.user {
    padding: 36px 0;
    background: #04acf7;
    text-align: center;
    position: relative;
}

.header {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: no-repeat center / cover;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5)
}

.drop {
    position: absolute;
    top: 0;
    right: 0;
}

.name {
    color: #fff;
    font-size: 16px;
    display: block;
    padding-top: 10px;
}

.mu-icon {
    color: #04acf7;
    font-size: 24px;
}
</style>
