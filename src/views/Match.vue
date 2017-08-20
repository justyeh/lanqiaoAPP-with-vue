<template>
    <div class="match-page">
        <match-poster></match-poster>
        <mu-divider />
        <div class="title box">
            <span>{{matchInfo.type == 0 ? '个人赛':'团队赛'}}</span>
            <p>{{matchInfo.name}}</p>
        </div>
        <mu-divider />

        <template v-if="matchInfo.id != 6">
            <div class="child" v-if="matchInfo.child">
                <span @click="signInfo.child = index" :class="{act:signInfo.child == index}" v-for="(item,index) in matchInfo.child">{{item}}</span>
            </div>
            <div class="icon">
                <div :style="icon" v-for="item in iconText">{{item}}</div>
            </div>
        </template>
        <template v-else>
            <div class="team-info">{{matchInfo.teamInfo}}</div>
        </template>

        <mu-divider />
        
        <div class="handle box">
            <div class="price">{{matchInfo.price ? '￥'+matchInfo.price+'元' : ''}}</div>
            <div class="sign">
                <mu-raised-button label="报名" class="demo-raised-button" secondary v-if="signInfo.signed == 0" @click="sign"/>
                <mu-raised-button label="已报名" class="demo-raised-button" disabled v-else/>
            </div>
        </div>
        <mu-divider />
        <div class="intro">
           <div class="box h3">
                <div></div>
                <p>备注</p>
                <div></div>
           </div>
           <ul>
               <li v-for="item in matchInfo.remarks">{{item}}</li>
           </ul>
        </div>
         <mu-toast class="toast" v-if="toastShow" :message="toastMsg" />
    </div>
</template>
<script>
const store = require('storejs')
import MatchPoster from '../components/MatchPoster'
import matchData from '../matchData'

const matchIcon = require('../assets/img/match-icon.png') 
export default {
    data(){
        return {
            icon:{backgroundImage: "url(" + matchIcon + ")"},
            iconText:['高校','就业','证书','名校'],
            toastShow:false,
            toastMsg:'',
            matchInfo:{},
            signInfo:{}
        }
    },
    activated(){
        this.signInfo = store.get("signInfo").filter(item =>{
            return item.id == this.$route.params.id
        })[0]
        this.matchInfo = matchData.filter(item=>{
           return item.id == this.$route.params.id
        })[0]
    },
    components:{
        MatchPoster
    },
    methods:{
        toast(msg){
            this.toastMsg = msg;
            this.toastShow = true;
            setTimeout(() => {
                this.toastShow = false;
            }, 600)
        },
        sign(){
            if(this.signInfo.child < 0){
                this.toast('请选择组别！')
                return
            }

            const allSignInfo = store.get("signInfo");
            var infoIndex = -1;
            allSignInfo.forEach((item,index)=>{
                if(item.id == this.$route.params.id){
                    infoIndex = index
                    return 
                }
            })
            
            this.signInfo.signed = 1;
            allSignInfo.splice(infoIndex,1,this.signInfo)
            store.set("signInfo",allSignInfo)

            this.toast('报名成功！')
        }
    }
}
</script> 

<style scoped>
.box{
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items: center;    

}
.title{
     font-size: 16px;
     color:#666;
     line-height:20px;
}
.title span{
    display: inline-block;
    padding:0 10px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    margin-right:5px;
    text-align: center;
    color: #fff;
    background: #4aa0e7;
}
.child{
   padding:20px;
}
.child span{
    display: inline-block;
    padding:0 10px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    margin-right:5px;
    text-align: center;
    color: #4aa0e7;
    background: #fff;
    border: 1px solid #4aa0e7;
}
.child span.act{
    color: #fff;
    background: #4aa0e7;
}
.icon{
    display:flex;
    padding:0 20px 10px 20px;
}
.icon div{
    width:40px;
    height:35px;
    line-height:30px;
    margin-right: 5px;
    color:#4aa0e7;
    font-size:12px;
    text-align:center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.team-info{
    color: #666;
    padding: 20px;
}

.price{
    color:#ff4081;
    font-size:16px;
}

.intro{
    font-size:14px;
    line-height:24px;
    color:#999;
    padding: 0 20px;
}
.intro .h3{
     justify-content:center;
}
.intro .h3 p{
    color:#4aa0e7;
    font-size:16px;
    text-align:center;
    padding:0 5px;
}

.intro .h3 div{
    height:1px;
    width:20px;
    background: #4aa0e7;
}

.intro li{
    padding-bottom:10px;
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