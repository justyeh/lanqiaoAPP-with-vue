<template>
    <div class="carousel-page">
        <carousel :perPage="1">
            <slide v-for="carousel in carouselList" :key="carousel.urlId">
                <router-link :to="'/news/'+carousel.urlId" :style="{backgroundImage:'url('+carousel.image+')'}" class="poster"></router-link>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    props:{
        carouselList:{
            type:Array
        }
    },
    components: {
        Carousel,
        Slide
    }
    
   
}
</script>

<style>
.carousel-page .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
}
.carousel-page .VueCarousel-dot-inner {
    background: rgba(239, 239, 239,0.7) !important;
}

.carousel-page .VueCarousel-dot--active .VueCarousel-dot-inner {
    background: rgba(239, 239, 239,1) !important;
}

</style>
<style scoped>
.poster {
    display: block;
    height: 150px;
    width: 100%;
    background: no-repeat center / cover;
}



</style>


