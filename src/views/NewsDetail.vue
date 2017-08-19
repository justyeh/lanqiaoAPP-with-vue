<template>
    <div class="new-detail-page">
        <div class="title">{{news.title}}</div>
        <mu-divider />
        <div class="conetnt" v-html="news.content"></div>
    </div>
</template>

<script>
import API from '../api'
export default {
    data() {
        return {
            news: ''
        }
    },
    activated() {
        this.getDetail()
    },
    methods: {
        getDetail() {
            const id = this.$route.params.id
            this.$http.get(API.getDetail + id).then(res => {
                this.news = res.data
            })
        }
    }
}
</script>

<style>
.new-detail-page img {
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.22);
}
.new-detail-page * {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif !important;
    line-height: 22px !important;
    font-size:14px !important;
    color: #888 !important;
}
</style>


<style lang="css" scoped>
.title {
    text-align: center;
    font-size: 16px;
    color: #04acf7;
    padding: 10px 20px;
}

.conetnt {
    padding: 0 10px;
}
</style>