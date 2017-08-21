<template>
  <footer>
    <mu-paper>
      <mu-bottom-nav :value="footerMenu" @change="updateMenu">
        <mu-bottom-nav-item to="/home" value="home" title="首页" icon="home" />
        <mu-bottom-nav-item to="/news" value="news" title="新闻" icon="chrome_reader_mode" />
        <mu-bottom-nav-item to="/uc" value="uc" title="我" icon="account_circle" />
      </mu-bottom-nav>
    </mu-paper>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: 'home'
    }
  },
  watch: {
    $route() {
      const fullPath = this.$route.fullPath;
      if (fullPath.indexOf('news') > 0) {
        this.footerMenu = 'news'
        return
      }
      if (fullPath.indexOf('uc') > 0) {
        this.footerMenu = 'uc'
        return
      }
      this.footerMenu = 'home'
    }
  },
  methods: {
    updateMenu(val) {
      this.footerMenu = val
    }
  }
}
</script>

<style lang="css">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
