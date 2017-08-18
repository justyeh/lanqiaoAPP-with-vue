<template>
    <div>
        <carousel :perPage="1">
            <slide v-for="carsouel in carsouelList" :key="carsouel.urlId">
                <router-link :to="'/news/'+carsouel.urlId" :style="{backgroundImage:'url('+carsouel.image+')'}" class="poster"></router-link>
            </slide>
        </carousel>
    
        <div class="col-box">
            <div class="grow-box">
                <div>成绩</div>
                <div>报名</div>
                <div>赛程</div>
            </div>
            <div class="grow-box">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    
        <template>
            <mu-timeline>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 1日</span>
                    <span slot="des">发起第一个pr</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 6日</span>
                    <span slot="des">发起第一个issue</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 12日</span>
                    <span slot="des">添加backTop组件</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 16日</span>
                    <span slot="des">加入Muse-UI org
                        <br/>添加breadcrumb组件</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 19日</span>
                    <span slot="des">添加FAQ模块</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 20日</span>
                    <span slot="des">添加Layout</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span>更多</span>
                </mu-timeline-item>
            </mu-timeline>
        </template>
    
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Bus from '../bus'

const banner1 = require("../assets/img/banner1.jpg")
const banner2 = require("../assets/img/banner2.jpg")
const banner3 = require("../assets/img/banner3.jpg")

export default {
    data() {
        return {
            carsouelList: [
                {
                    image: banner1,
                    urlId: 774,
                },
                {
                    image: banner2,
                    urlId: 743,
                },
                {
                    image: banner3,
                    urlId: 772,
                }
            ]
        }
    },
    destroyed() {
        Bus.$emit('updateMenu', 'news')
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>
.poster {
    display: block;
    height: 200px;
    width: 100%;
    background: no-repeat center / cover;
}

.VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
}

.VueCarousel-dot-inner {
    background: rgba(0, 0, 0, 0.5)
}

VueCarousel-dot--active .VueCarousel-dot-inner {
    background: red;
}

.col-box {
    padding-top: 20px;
}

.grow-box {
    display: flex;
}

.grow-box div {
    flex: 1;
    height: 100px;
    border-style: solid;
    border-color: #eee;
    border-width: 0 1px 1px 0;
}

.grow-box div:last-child {
    border-right-width: 0;
}

.col-box .grow-box:last-child div {
    border-bottom-width: 0;
}
</style>


