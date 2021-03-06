const Home = resolve => {
    require.ensure(["./views/Home.vue"], () => {
        resolve(require("./views/Home.vue"));
    });
};
const News = resolve => {
    require.ensure(["./views/News.vue"], () => {
        resolve(require("./views/News.vue"));
    });
};

const Uc = resolve => {
    require.ensure(["./views/Uc.vue"], () => {
        resolve(require("./views/Uc.vue"));
    });
};

const Login = resolve => {
    require.ensure(["./views/Login.vue"], () => {
        resolve(require("./views/Login.vue"));
    });
};

const NewsDetail = require("./views/NewsDetail.vue");

const routers = [
    {
        path: "/login",
        name:'login',
        meta: { navShow: false},
        component: Login
    },
    {
        path: "/",
        meta: { navShow: true},
        component: Home
    },
    {
        path: "/match/:id",
        meta: { navShow: false,title:"赛事"},
        component(resolve) {
            require.ensure(["./views/Match.vue"], () => {
                resolve(require("./views/Match.vue"));
            });
        }
    },
    {
        path: "/news",
        meta: { navShow: true},
        component: News
    },
    {
        path: "/news/:id",
        meta: { navShow: false,title:"新闻"},
        component(resolve) {
            require.ensure(["./views/NewsDetail.vue"], () => {
                resolve(require("./views/NewsDetail.vue"));
            });
        }
    },
    {
        path: "/uc",
        meta: { navShow: true},
        component: Uc
    },
    {
        path: "/uc/order",
        meta: { navShow: false,title:"我的订单"},
        component(resolve) {
            require.ensure(["./views/uc/Order.vue"], () => {
                resolve(require("./views/uc/Order.vue"));
            });
        }
    },
    {
        path: "/uc/award",
        meta: { navShow: false,title:"获奖记录"},
        component(resolve) {
            require.ensure(["./views/uc/Award.vue"], () => {
                resolve(require("./views/uc/Award.vue"));
            });
        }
    },
    {
        path: "/uc/auth",
        meta: { navShow: false,title:"认证信息"},
        component(resolve) {
            require.ensure(["./views/uc/Auth.vue"], () => {
                resolve(require("./views/uc/Auth.vue"));
            });
        }
    },
    {
        path: "/uc/settings",
        meta: { navShow: false,title:"账号设置"},
        component(resolve) {
            require.ensure(["./views/uc/Settings.vue"], () => {
                resolve(require("./views/uc/Settings.vue"));
            });
        }
    },
    {
        path: "/uc/about",
        meta: { navShow: false,title:"关于蓝桥杯"},
        component(resolve) {
            require.ensure(["./views/uc/About.vue"], () => {
                resolve(require("./views/uc/About.vue"));
            });
        }
    },
    {
        path: "/uc/message",
        meta: { navShow: false,title:"我的消息"},
        component(resolve) {
            require.ensure(["./views/uc/Message.vue"], () => {
                resolve(require("./views/uc/Message.vue"));
            });
        }
    },
    {
        path: "*",
        meta: { navShow: true},
        component: Home
    }
];
export default routers;
