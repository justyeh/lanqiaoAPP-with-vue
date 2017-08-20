// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;

/* router */
import VueRouter from "vue-router";
import routes from "./routes";
const store = require('storejs')
Vue.use(VueRouter);
const router = new VueRouter({
    //mode: 'history',
    routes,
    /*scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }*/
});
/*check login status*/
router.beforeEach((to, from, next) => {
    if (store.has('user') || to.name == 'login') {
        next()
    } else {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })

    }
})


/* muse-ui */
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import 'muse-ui/dist/theme-light.css'
Vue.use(MuseUI);

/* fastclick */
import FastClick from "fastclick";
FastClick.attach(document.body);

/* axios */
import axios from "axios";
Vue.prototype.$http = axios;

/* vue-carousel */
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

/*init app data*/
import setDataStore from './dataStore';
setDataStore()

/* eslint-disable no-new */
new Vue({
    el: "#app",
    template: "<App/>",
    router,
    components: { App }
});
