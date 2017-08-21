<template>
  <div id="app">
    <template v-if="$route.meta.title">
      <mu-appbar :title="$route.meta.title" class="appbar">
        <mu-icon-button icon="chevron_left" @click="goBack" slot="left"/>
      </mu-appbar>
    </template>
      <keep-alive>
        <router-view ></router-view>
        <!--<transition>
          <router-view ></router-view>
        </transition>-->
      </keep-alive>
     <footer-menu v-show="$route.meta.navShow"></footer-menu> 
  </div>
</template>

<script>
require('./assets/css/common.css')
import FooterMenu from './components/FooterMenu'

export default {
  name: 'app',
  components: {
    FooterMenu
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>


<style>
#app {
  min-height: 100%;
  padding-bottom: 56px;
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
}

.appbar {
  background:#04acf7;
  height:46px;
  font-size: 16px;
}
.appbar button{
  width: 46px;
  height: 46px;
  padding:0;
}
.appbar .mu-appbar-title{
    text-align: center;
    padding: 0 46px 0 0;
    font-size: 18px;
    line-height: 46px;
}
</style>
<style>

/*
.page-switch-enter-active, .page-switch-leave-active {
  transition: opacity .5s
}
.page-switch-enter, .page-switch-leave-to {
  opacity: 0
}
*/

</style>
