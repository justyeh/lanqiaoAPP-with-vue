<template>
    <div class="news-list-page">
        <mu-sub-header class="page-title">新闻</mu-sub-header>
        <mu-divider />
        <infinite-news class="news-box"></infinite-news>  
    </div>
</template>

<script>
import InfiniteNews from '../components/InfiniteNews'
export default {
    components:{
        InfiniteNews
    }
    
}
</script>

<style>
.news-list-page .mu-item-title {
    font-size: 14px;
    line-height: 16px;
    color: #222;
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
</style>