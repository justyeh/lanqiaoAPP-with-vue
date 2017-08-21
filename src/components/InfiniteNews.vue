<template>
    <div class="news-box">
        <template v-if="isShowProgress">
            <mu-circular-progress class="progress-loading" :size="60" :strokeWidth="5" />
        </template>
        <template v-else>
            <keep-alive>
                <mu-list>
                    <div v-for="news in newsList" :key="news.id">
                        <mu-list-item :title="news.title" :to="`/news/${news.id}`">
                            <div class="poster" :style="{backgroundImage:'url('+ (news.img_src || newsImage)+')'}" slot="leftAvatar"></div>
                            <span slot="describe">
                                <span>{{news.admin || 'lanqiao'}} -</span>{{news.content}}
                            </span>
                        </mu-list-item>
                        <mu-divider />
                    </div>
                </mu-list>
            </keep-alive>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" v-show="hasMoreNews" loadingText="正在加载..." />
            <p class="no-news" v-if="!hasMoreNews">没有了</p>
        </template>
    </div>
</template>


<script>
import API from '../api'
const store = require('storejs')
var newsImage = require('../assets/img/news.jpg')

export default {
    data() {
        return {
            isShowProgress: true,
            newsImage,
            newsList: [],
            p: 1,
            loading: false,
            scroller: null,
            hasMoreNews: true,
            saveScrollTop: 0
        }
    },
    created() {
        this.$http.get(API.getList + this.p).then(res => {
            this.newsList = res.data.new_list
            this.isShowProgress = false;
        })
    },
    watch:{
        $route(){
            store.set('newsPositon', this.saveScrollTop)
        }
    },
    mounted() {
        this.scroller = this.$el

        this.$el.onscroll = () => {
            this.saveScrollTop = this.$el.scrollTop
        }
    },
    methods: {
        loadMore() {
            if (!this.hasMoreNews) {
                return
            }

            this.loading = true;
            this.p++;

            setTimeout(() => {
                this.$http.get(API.getList + this.p).then(res => {
                    this.loading = false;
                    var result = res.data.new_list;
                    if (result.length == 0) {
                        this.hasMoreNews = false;
                        return
                    }
                    result.forEach(news => {
                        this.newsList.push(news)
                    });
                })
            }, 500)
        }
    }
}
</script>

<style lang="css" scoped>
.progress-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.news-box {
    overflow: auto;
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 56px;
}

.poster {
    width: 40px;
    height: 40px;
    background: no-repeat center / cover
}

.mu-list {
    padding: 0;
}

.no-news {
    text-align: center;
    font-size: 17px;
    height: 36px;
    color: #aaa;
    line-height: 36px;
}
</style>

