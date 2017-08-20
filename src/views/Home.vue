<template>
    <div>
       <carousel-box :carousel-list="carouselList"></carousel-box>
        <div class="page-title">赛事</div>
        <mu-divider />
        <div class="match-box">
            <mu-list>
                <mu-list-item  :to="`/match/${match.id}`" :title="match.name" v-for="match in matchData" :key="match.id">
                    <mu-icon value="navigate_next" slot="right" /> 
                </mu-list-item>
            </mu-list>
        </div>
        <div class="page-title">赛程</div>
        <mu-divider />
        <div class="timeline-box">
            <mu-timeline>
                <mu-timeline-item v-for="item in timeline" :key="item.event">
                    <div slot="time" class="timeline-time">{{item.time}}<span :class="'type'+item.matchType">{{item.matchType == 1 ? '个人赛' : '团队赛'}}</span></div>
                    <div slot="des" class="timeline-info">{{item.events}}</div>
                </mu-timeline-item>
            </mu-timeline>
        </div>
    </div>
</template>

<script>
import CarouselBox from '../components/CarouselBox';
import matchData from '../matchData'

export default {
    data() {
        return {
            matchData,
            carouselList: [
                {image:  require("../assets/img/banner1.jpg"),urlId: 774,},
                {image: require("../assets/img/banner2.jpg"),urlId: 743,},
                {image: require("../assets/img/banner3.jpg"),urlId: 772,}
            ],
            timeline:[
                {time:'2016.10',events:'省赛报名',matchType:1},
                {time:'2016.10',events:'团队赛报名',matchType:2},
                {time:'2016.11',events:'省赛师资培训会',matchType:1},
                {time:'2016.12',events:'省赛报名截止',matchType:1},
                {time:'2017.04',events:'省赛举办',matchType:1},
                {time:'2017.04',events:'团队赛预赛评审',matchType:2},
                {time:'2017.04',events:'决赛师资培训会',matchType:1},
                {time:'2017.05',events:'国赛',matchType:1}
            ]
        }
    },
    components:{
        CarouselBox
    }
}
</script>

<style scoped>
.page-title{
    font-size: 16px;
    color: #04acf7;
    line-height: 36px;
    padding-left: 16px;
    border-top:solid 15px rgba(0,0,0,0.12);
}
.timeline-box{
    display:flex;
    justify-content:center;
    padding:20px 0
}
.timeline-time{
    font-size:14px;
    color: #5786ab;
} 
.timeline-time span{
    height: 20px;
    line-height: 20px;
    width: 52px;
    text-align: center;
    color: #fff;
   
    font-size: 12px;
    display: inline-block;
    margin-left:10px;
}
.timeline-time .type1{
    background: #4aa0e7;
}
.timeline-time .type2{
    background: #01c0c8;
}
.timeline-info{
    color: #5786ab;
    font-size:14px;
}

</style>


