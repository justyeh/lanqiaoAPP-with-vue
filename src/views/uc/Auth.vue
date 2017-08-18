<template>
    <div class="settins-page">
        <div class="info">
            <p>恭喜，您的个人认证信息已经通过后台审核！</p>
        </div>
    
        <mu-divider />
        <mu-sub-header>个人信息</mu-sub-header>
        <div class="item">
            <div>姓名</div>
            <div>
                <mu-text-field value="张小右" fullWidth />
            </div>
        </div>
        <div class="item">
            <div>性别</div>
            <div class="border-bottom">
                <mu-radio label="男" name="sex" nativeValue="man" v-model="sex" class="demo-radio" />
                <mu-radio label="女" name="sex" nativeValue="woman" v-model="sex" class="demo-radio" />
            </div>
        </div>
        <div class="item">
            <div>证件类型</div>
            <div>
                <mu-select-field v-model="IDType">
                    <mu-menu-item v-for="text,index in IDTypeList" :key="index" :value="index" :title="text" />
                </mu-select-field>
            </div>
        </div>
        <div class="item">
            <div>证件号码</div>
            <div>
                <mu-text-field value="420921199307134856" fullWidth />
            </div>
        </div>
        <mu-divider />
        <mu-sub-header>院校信息</mu-sub-header>
        <div class="item">
            <div>学校</div>
            <div>
                <mu-text-field value="湖北工程学院" fullWidth />
            </div>
        </div>
        <div class="item">
            <div>学历</div>
            <div>
                <mu-select-field v-model="edu">
                    <mu-menu-item v-for="text,index in eduList" :key="index" :value="index" :title="text" />
                </mu-select-field>
            </div>
        </div>
        <div class="item">
            <div>专业</div>
            <div>
                <mu-text-field value="计算机" fullWidth />
            </div>
        </div>
        <div class="item">
            <div>学号</div>
            <div>
                <mu-text-field value="012301714232" fullWidth />
            </div>
        </div>
        <div class="item">
            <div>入学时间</div>
            <div class="border-bottom">2016-06-01</div>
        </div>
        <div class="item">
            <div>毕业时间</div>
            <div class="border-bottom">2016-06-01</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sex: 'man',
            IDType: 1,
            IDTypeList: ['身份证', '军官证'],
            edu: 2,
            eduList: ['硕士研究生', '重点本科', '普通本科', '专科', '其他']
        }
    },
    methods: {

    }
}
</script>


<style>
.settins-page input {
    text-align: right;
}

.settins-page .mu-text-field {
    width: 100%;
    margin-bottom: 0;
}

.settins-page .mu-radio-icon {
    margin-right: 10px;
}
</style>


<style scoped>
.info {
    text-align: center;
    padding: 20px 0;
}

.info p {
    display: inline-block;
    background: rgba(4, 172, 247, 0.68);
    text-align: center;
    border: 1px solid #04acf7;
    padding: 10px;
    color: #fff;
}

.item {
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    height: 50px;
    overflow: hidden;
}

.item>div:first-child {
    width: 70px;
    text-align: right;
    padding-right: 5px;
}

.item>div:last-child {
    flex: 1;
    text-align: right;
}

.border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>


