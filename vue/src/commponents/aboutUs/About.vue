<template>
    <div>
        <header class="backHome">
            <head-back path="/home" title="我的"></head-back>
            <router-link to="/aboutUs/login">
                <div class="clearFix login">
                    <i></i>
                    <span class="loginIn">登陆/注册</span>
                    <span class="go">></span>
                </div>
            </router-link>
        </header>

    </div>
</template>

<script>
    import HeadBack from '../routerView/headBack.vue';
    export default({
        name: 'About',
        components:{
            'head-back':HeadBack
        }
    })
</script>

<style>
    .backHome {
        text-align: center;
        font-size: 24px;
        background-color: #0097ff;
        padding: 10px;
    }

    .backHome span {
        color: #fff;
        font-weight: 700;
    }

    .mine .back {
        float: left;
        margin-left: 10px;
    }

    .backHome .login {
        text-align: left;
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin: 20px;
    }

    .login i {
        display: inline-block;
        width: 70px;
        height: 70px;
        vertical-align: middle;
        background: url("../../img/unlogin.png") #ffffff no-repeat center/69px;
        border-radius: 50%;
    }

    .backHome .login .loginIn {
        font-size: 26px;
        font-weight: 700;
        padding-left: 10px;
    }

    .backHome .login .go {
        float: right;
        padding-right: 20px;
    }


</style>