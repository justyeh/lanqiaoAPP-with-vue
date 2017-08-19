<template>
    <div class="settings-page">
        <div class="info">
            <p>恭喜，您的个人认证信息已通过审核！</p>
        </div>
    
        <mu-divider />
        <mu-sub-header>个人信息</mu-sub-header>
         <mu-list-item title="姓名" @click="editFiled('name')">
          <div :style="arrow" class="arrow" slot="right">{{authInfo.name}}</div>
        </mu-list-item>

         <mu-divider />
        <mu-list-item title="姓名">
          <div slot="right">
                <mu-radio label="男" name="sex" nativeValue="m" v-model="authInfo.sex" class="demo-radio" />
                <mu-radio label="女" name="sex" nativeValue="w" v-model="authInfo.sex" class="demo-radio" />
            </div>
        </mu-list-item>
<mu-divider />
        <mu-list-item title="证件类型" @click="openSheet('cardType')">
          <div :style="arrow" class="arrow" slot="right">{{cardTypeList[authInfo.cardType]}}</div>
        </mu-list-item>
<mu-divider />
        <mu-list-item title="证件号码" @click="editFiled('cardId')">
          <div :style="arrow" class="arrow" slot="right">{{authInfo.cardId}}</div>
        </mu-list-item>

       
        <mu-divider />
        <mu-sub-header>院校信息</mu-sub-header>

         <mu-list-item title="学校" @click="editFiled('school')">
          <div :style="arrow" class="arrow" slot="right">{{authInfo.school}}</div>
        </mu-list-item>
<mu-divider />

         <mu-list-item title="学历"  @click="openSheet('edu')">
          <div :style="arrow" class="arrow" slot="right">{{eduList[authInfo.edu]}}</div>
        </mu-list-item>
<mu-divider />
        <mu-list-item title="专业" @click="editFiled('major')">
          <div :style="arrow" class="arrow" slot="right">{{authInfo.major}}</div>
        </mu-list-item>
<mu-divider />
        <mu-list-item title="学号" @click="editFiled('stuNo')">
          <div :style="arrow" class="arrow" slot="right">{{authInfo.stuNo}}</div>
        </mu-list-item>
<mu-divider />
         <mu-list-item title="入学时间">
            <mu-date-picker slot="right" :underlineShow="false" labelClass="data-picker" v-model="authInfo.enrollment"/>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="毕业时间" >
            <mu-date-picker slot="right" :underlineShow="false" v-model="authInfo.graduation"/>
        </mu-list-item>
<mu-divider />

        <mu-dialog :open="filedDialog" bodyClass="settings-dialog-body" title="">
            <mu-text-field hintText="Full Width" class="dialog-input" fullWidth  ref="filed"/>
            <mu-flat-button label="取消" slot="actions" primary @click="filedDialog = false"  />
            <mu-flat-button label="确定" slot="actions" primary @click="updateFiled"/>
        </mu-dialog>

        <mu-bottom-sheet :open="sheetBox" @close="closeSheet">
            <mu-list @itemClick="closeSheet">
            <mu-sub-header>
                
            </mu-sub-header>
            <mu-list-item title="阴阳师"/>
            <mu-list-item title="贪吃蛇大作战"/>
            <mu-list-item title="一划到底"/>
            <mu-list-item title="全民斗地主"/>
            </mu-list>
        </mu-bottom-sheet>

    </div>
</template>

<script>
const rightIcon = require("../../assets/img/right.svg")
export default {
    data() {
        return {
            arrow:{
                backgroundImage: "url(" + rightIcon + ")",
            },
            sheetBox:false,
            filedDialog:false,
            cardTypeList: ['身份证', '军官证'],
            eduList: ['硕士研究生', '重点本科', '普通本科', '专科', '其他'],
            authInfo:{
                name:'张小右',
                sex:'m',
                cardType:0,
                cardId:420921199307134561,
                school:'湖北工程学院',
                edu:2,
                major:'计算机',
                stuNo:'012301714323',
                enrollment:'2012-09-01',
                graduation:'2016-06-01'
            }

        }
    },
    methods: {
        closeSheet(){
            this.sheetBox = false
        },
        openSheet(key){
            this.sheetBox = true
        },
        editFiled(filed){
            this.filedDialog  =true;
            //this.$refs.filed.focus();
        },
        updateFiled(){
            this.filedDialog  =false;
        }
    }
}
</script>


<style>
.settings-page .mu-item-right {
     width:200px;
    justify-content:flex-end;
    font-size:16px;
}
.settings-page .mu-radio-icon{
    margin-right:0;
}

.settings-page .mu-date-picker div{
    display: flex;
    align-items: center;
    justify-content:flex-end;
    padding:0;
    margin:0;
}
.settings-page .mu-date-picker .mu-text-field-input{
    text-align: right;
    font-size: 16px;
    color: #757575;
}
.settings-dialog-body{
    padding-bottom:10px;
}
.settings-dialog-body .mu-flat-button{
    min-width:normal;
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

.arrow{
    background-repeat: no-repeat;
    background-position: right -12px center;
    padding-right: 20px;
    height: 16px;
    line-height: 16px;
}

.dialog-input{
    margin-bottom:0;
}
</style>

