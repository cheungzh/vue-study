import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
import Exit from './commponents/routerView/RouterView.vue';
import Home from './commponents/home/Home.vue';
import Sort from './commponents/sort/Sort.vue';
import ShopCart from './commponents/shopCart/ShopCart.vue';
import Order from './commponents/order/Order.vue';

import About from './commponents/aboutUs/About.vue';
import Login from './commponents/aboutUs/login/login.vue';
const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Exit,
        children:[
            {path:'',component:Home},
            {path:'new',component:Sort},
            {path:'other',component:ShopCart},
        ]
    },
    {path: '/sort', component: Sort},
    {path: '/shopCart', component: ShopCart},
    {path: '/order', component: Order},
    {path: '/aboutUs', component: Exit,
        children:[
            {path:'',component:About},
            {path:'login',component:Login}
        ]
    }
];
const router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
