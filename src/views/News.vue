<template>
    <div class="news-list-page">
        <mu-sub-header class="page-title">新闻</mu-sub-header>
        <mu-divider />
    
        <template v-if="isShowProgress">
            <mu-circular-progress class="progress" :size="60" :strokeWidth="5" />
        </template>
        <template v-else>
            <div class="news-list" ref="newsListContainer">
                <keep-alive>
                    <mu-list>
                        <div v-for="news in newsList" :key="news.id">
                            <mu-list-item :title="news.title" :to="`/news/${news.id}`">
                                <div class="poster" :style="{backgroundImage:'url('+ (news.img_src || newsImage)+')'}" slot="leftAvatar"></div>
                                <span slot="describe">
                                    <span style="color: rgba(0, 0, 0, .87)">{{news.admin || 'lanqiao'}} -</span>{{news.content}}
                                </span>
                            </mu-list-item>
                            <mu-divider />
                        </div>
                    </mu-list>
                </keep-alive>
                <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" v-show="hasMoreNews" />
                <p class="no-news" v-if="!hasMoreNews">没有了</p>
            </div>
        </template>
    
    </div>
</template>

<script>
import API from '../api'
var newsImage = require('../assets/img/news.jpg')
export default {
    data() {
        return {
            newsImage,
            newsList: [],
            p: 1,
            loading: false,
            scroller: null,
            hasMoreNews: true,
            isShowProgress: true
        }
    },
    created: function () {
        this.$http.get(API.getList + this.p).then(res => {
            this.isShowProgress = false;
            this.newsList = res.data.new_list
        })
    },
    mounted() {
        this.scroller = this.$refs.newsListContainer
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

<style>
.news-list-page .mu-item-title {
    font-size: 14px;
    line-height: 16px;
}
</style>

<style lang="css" scoped>
.page-title {
    font-size: 16px;
    color: #04acf7;
    font-weight: bold;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.news-list {
    overflow: auto;
    position: fixed;
    top: 48px;
    bottom: 56px;
    left: 0;
    right: 0;
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