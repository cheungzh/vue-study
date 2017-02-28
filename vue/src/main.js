import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
import Home from './commponents/home/Home.vue';
import Sort from './commponents/sort/Sort.vue';
import ShopCart from './commponents/shopCart/ShopCart.vue';
import Order from './commponents/order/Order.vue';
import About from './commponents/aboutUs/About.vue';
const routes=[
  {path:'/',component:Home},
  {path:'/home', component:Home},
  {path:'/sort',component:Sort},
  {path:'/shopCart',component:ShopCart},
  {path:'/order',component:Order},
  {path:'/aboutUs',component:About}
    ];
const router=new VueRouter({
  routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
