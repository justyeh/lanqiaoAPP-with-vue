<template>
    <div class="poster-page">
        <carousel :perPage="1">
            <slide v-for="(poster,index) in posterList" :key="index">
                <img :src="poster" class="poster">
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data(){
        return{
            posterList:[
                require("../assets/img/match-poster1.jpg"),
                require("../assets/img/match-poster2.jpg"),
                require("../assets/img/match-poster3.jpg")
            ]
        }
    },
    components: {
        Carousel,
        Slide
    }
    
   
}
</script>

<style>
.poster-page .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
}
.poster-page .VueCarousel-dot-inner {
    background: rgba(239, 239, 239,0.7) !important;
}

.poster-page .VueCarousel-dot--active .VueCarousel-dot-inner {
    background: rgba(239, 239, 239,1) !important;
}
</style>
<style scoped>
.poster {
    display: block;
    width: 100%;
}
</style>


