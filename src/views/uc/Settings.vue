<template>
    <div class="settins-page">
        <mu-list>
            <mu-list-item disabled title="APP设置" describeText="设置消息通知和检查新版本" />
        </mu-list>
        <mu-divider />
        <mu-list>
            <mu-sub-header>通知设置</mu-sub-header>
            <mu-list-item title="事件和提醒" @click="updateState('message')">
                <mu-switch slot="right" v-model="settings.message" />
            </mu-list-item>
            <mu-list-item title="震动" @click="updateState('shake')" >
                <mu-checkbox v-model="settings.shake" slot="right" />
            </mu-list-item>
            <mu-list-item title="声音" @click="updateState('voice')" >
                <mu-checkbox v-model="settings.voice" slot="right" />
            </mu-list-item>
        </mu-list>
    
        <mu-divider />
        <mu-list>
            <mu-sub-header>其他</mu-sub-header>
            <mu-list-item @click="checkNewVersion" title="V1.0.0(检查新版本)"> </mu-list-item>
            <mu-list-item @click="cleanCache" title="清除缓存"> </mu-list-item>
        </mu-list>
    
        <mu-dialog :open="showDialog" title="检查新版本" dialogClass="dialog">
            <template v-if="hasNewVersion">
                <mu-circular-progress class="progress" :size="60" :strokeWidth="5" />
            </template>
            <template v-else>
                没有检查到新版本
            </template>
            <mu-flat-button label="确定" slot="actions" primary @click="closeDailog" />
        </mu-dialog>
        <mu-toast class="toast" v-if="toast" message="清除缓存成功" />
    </div>
</template>

<script>

const store = require('storejs')
export default {
    data() {
        return {
            showDialog: false,
            hasNewVersion: true,
            toast: false,
            settings:{}
        }
    },
    created(){
        this.settings =  store.get("settings");
    },
    watch:{
        settings:{
            handler: function(val, oldVal) {
                store.set('settings',this.settings)
            },
            deep: true
        }
    },
    methods: {
        updateState(key){
            this.settings[key] =  !this.settings[key]
        },
        checkNewVersion() {
            this.showDialog = true;
            setTimeout(() => {
                this.hasNewVersion = false;
            }, 1200)
        },
        closeDailog() {
            this.showDialog = false;
            this.hasNewVersion = true
        },
        cleanCache() {
            this.toast = true;
            setTimeout(() => {
                this.toast = false;
            }, 600)
        }
    }
}
</script>

<style scoped>
.dialog .mu-dialog-body {
    display: flex;
    justify-content: center;
}

.toast {
    position: fixed;
    bottom: 100px;
    left: 0;
    right: 0;
    margin: auto;
    width: 160px;
    background: #04acf7;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
</style>


