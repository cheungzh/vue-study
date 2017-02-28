<template>
    <div id="app">
        <div class="viewFoot clearFix">
            <div class="foot">
                <router-link to="/home">首页</router-link>
            </div>
            <div class="foot">
                <router-link to="/sort">分类</router-link>
            </div>
            <div class="foot">
                <router-link to="/shopCart">购物车</router-link>
            </div>
            <div class="foot">
                <router-link to="/order">订单</router-link>
            </div>
            <div class="foot">
                <router-link to="/aboutUs">关于我们</router-link>
            </div>
        </div>
        <div class="viewBody">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        color: #2e2e2e;
    }
    .clearFix:after{
        display: block;
        content: '';
        clear: both;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        margin-top: 60px;
    }
    .clearFix{
        content: '';
        clear: both;
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #333;
        /*font-size: 20px;*/
        text-decoration: none;
    }

    .router-link-active {
        color: red;
    }

    .viewFoot {
        width: 100%;
        position: fixed;
        bottom: 10px;
    }

    .foot {
        width: 20%;
        float: left;
        text-align: center;
    }
</style>
