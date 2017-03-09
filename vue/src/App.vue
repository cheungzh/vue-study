<template>
    <div id="app">
        <div class="viewFoot clearFix">
            <div class="foot">
                <router-link to="/home">
                    <span class="nav pic1">首页</span>
                </router-link>
            </div>
            <div class="foot">
                <router-link to="/sort">
                    <span class="nav pic2">分类</span>
                </router-link>
            </div>
            <div class="foot">
                <router-link to="/shopCart">
                    <span class="nav pic3">购物车</span>
                </router-link>
            </div>
            <div class="foot">
                <router-link to="/order">
                    <span class="nav pic4">订单</span>
                </router-link>
            </div>
            <div class="foot">
                <router-link to="/aboutUs">
                    <span class="nav pic5">我的</span>
                </router-link>
            </div>
        </div>
        <div class="viewBody">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
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
    * {
        margin: 0;
        padding: 0;
        color: #2e2e2e;
    }

    .clearFix:after {
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
        /*margin-top: 20px;*/
    }

    input:focus {
        outline: none;
    }

    .clearFix {
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

    .router-link-active .nav {
        color: #47b34f;
    }

    .viewFoot {
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        height: 60px;
        line-height: 60px;
    }

    .foot {
        width: 20%;
        float: left;
        text-align: center;
    }

    .pic1,.pic2,.pic3,.pic4,.pic5 {
        text-align: center;
        width: 100%;
        height: 30px;
        display: block;
        font-size: 16px;
        padding-top: 5px;
        background: url("./img/nav2.png") no-repeat center -276px;
        background-size: 24px;
    }
    span.pic2{
        background-position:center -333px;
    }
    span.pic3{
        background-position:center -387px;
    }
    span.pic4{
        background-position:center -441px;
    }
    span.pic5{
        background-position:center -495px;
    }
    .router-link-active .pic1{
        background-position: center -5px;
    }
    .router-link-active .pic2{
        background-position: center -60px;
    }
    .router-link-active .pic3{
        background-position: center -114px;
    }
    .router-link-active .pic4{
        background-position: center -168px;
    }
    .router-link-active .pic5{
        background-position: center -222px;
    }
</style>
