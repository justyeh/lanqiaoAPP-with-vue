<template>
  <div id="app">
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
  }
}
</script>

<style>
#app {
  min-height: 100%;
  padding-bottom: 56px;
  position: relative;
}
/*
.page-switch-enter-active, .page-switch-leave-active {
  transition: opacity .5s
}
.page-switch-enter, .page-switch-leave-to {
  opacity: 0
}
*/

</style>
