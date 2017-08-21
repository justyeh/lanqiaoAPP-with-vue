<template>
    <div class="settings-page">
        <div class="info">
            <p>恭喜，您的个人认证信息已通过审核！</p>
        </div>
    
        <mu-divider />

        <mu-sub-header>个人信息</mu-sub-header>
            <mu-list-item title="姓名" @click="openDialog('name','姓名')">
            <div :style="arrow" class="arrow" slot="right">{{authInfo.name}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="性别">
            <div slot="right" class="sex-box">
                <mu-radio label="男" name="sex" nativeValue="m" v-model="authInfo.sex" class="demo-radio" />
                <mu-radio label="女" name="sex" nativeValue="w" v-model="authInfo.sex" class="demo-radio" />
            </div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="证件类型" @click="openSheet('cardType','证件类型')">
            <div :style="arrow" class="arrow" slot="right">{{cardTypeList[authInfo.cardType]}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="证件号码" @click="openDialog('cardId','证件号码')">
            <div :style="arrow" class="arrow" slot="right">{{authInfo.cardId}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-sub-header>院校信息</mu-sub-header>

        <mu-list-item title="学校" @click="openDialog('school','学校')">
            <div :style="arrow" class="arrow" slot="right">{{authInfo.school}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="学历"  @click="openSheet('edu','学历')">
            <div :style="arrow" class="arrow" slot="right">{{eduList[authInfo.edu]}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="专业" @click="openDialog('major','专业')">
            <div :style="arrow" class="arrow" slot="right">{{authInfo.major}}</div>
        </mu-list-item>
        <mu-divider />

        <mu-list-item title="学号" @click="openDialog('stuNo','学号')">
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

        <mu-dialog :open="filedDialog" bodyClass="settings-dialog-body" titleClass="settings-dialog-title" :title="editFiledName">
            <mu-text-field  class="dialog-input" fullWidth v-model="currEditFiled" :errorText="currFiledError" />
            <mu-flat-button label="取消" slot="actions" primary @click="filedDialog = false"  />
            <mu-flat-button label="确定" slot="actions" primary @click="updateFiled"/>
        </mu-dialog>

        <mu-bottom-sheet :open="sheetBox" @close="sheetBox = false">
            <mu-list>
                <mu-sub-header>{{editFiledName}}</mu-sub-header>
                <template v-for="(item,index) in editSheet">
                    <mu-list-item @click="updateSheetFiled(index)" :class="{curr:index == authInfo[editFiledKey]}" :title="item"/>
                </template>
            </mu-list>
        </mu-bottom-sheet>
    </div>
</template>

<script>
const store = require('storejs')

const rightIcon = require("../../assets/img/right.svg")
export default {
    data() {
        return {
            arrow:{backgroundImage: "url(" + rightIcon + ")"},
            currEditFiled:null,
            currFiledError:'',
            editFiledKey:'',
            editFiledName:'',
            editSheet:[],
            sheetBox:false,
            filedDialog:false,
            cardTypeList: ['身份证', '军官证'],
            eduList: ['硕士研究生', '重点本科', '普通本科', '专科', '其他'],
            authInfo:{}
        }
    },
    created(){
        this.authInfo =  store.get("authInfo");
    },
    watch:{
        authInfo:{
            handler: function(val, oldVal) {
                store.set('authInfo',this.authInfo)
            },
            deep: true
        }
    },
    methods: {
        openSheet(key,name){
            if(key == 'edu'){
                this.editSheet = this.eduList
            }else if(key == 'cardType'){
                this.editSheet = this.cardTypeList
            }else{
                return 
            }
            this.editFiledKey = key;
            this.editFiledName = name;

            this.sheetBox = true
        },
        openDialog(key,name){
            this.editFiledKey = key;
            this.editFiledName = name;
            this.currEditFiled = this.authInfo[this.editFiledKey]

            this.currFiledError = ''
            this.filedDialog  =true;
        },
        updateFiled(){
            if(!this.currEditFiled){
                this.currFiledError = this.editFiledName +'不能为空';
                return;
            } 
            if(this.editFiledKey == 'cardId' && this.authInfo.cardType == 0 && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.currEditFiled) ){
                this.currFiledError = '请输入合法证件号';
                return;
            }
            this.filedDialog  =false;
            this.authInfo[this.editFiledKey] = this.currEditFiled
        },
        updateSheetFiled(index){
             this.authInfo[this.editFiledKey] = index
             this.sheetBox = false
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
.settings-dialog-title{
    padding:10px 24px 0 24px;
}
.settings-dialog-body{
    padding-bottom:10px;
}  
.mu-list .curr .mu-item-title{
    color:#04acf7;
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
.mu-flat-button{
      min-width: 44px;
}
.sex-box{
    display: flex;
    align-items: center;
}
</style>

