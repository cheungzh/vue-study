<template>
    <div class="aboutBody">
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
        <section>
            <div class="detail">
                <router-link to="/aboutUs/login" class="detail-1">
                    <p>--</p>
                    <p>余额</p>
                </router-link>
                <div class="detail-2"></div>
                <router-link to="/aboutUs/login" class="detail-1">
                <p>--</p>
                <p>优惠</p>
                </router-link>
                <div class="detail-2"></div>
                <router-link to="/aboutUs/login" class="detail-1">
                <p>--</p>
                <p>积分</p>
                </router-link>
            </div>
        </section>
        <section>
            <div class="myself">
                <other-list path="/aboutUs/login" title="订单" icon="style icon-1"></other-list>
                <other-list path="/aboutUs/login" title="绑定手机号" icon="style icon-2"></other-list>
            </div>
            <div class="server">
                <other-list path="/aboutUs/login" title="服务与反馈" icon="style icon-3"></other-list>
                <other-list path="/aboutUs/login" title="下载京东到家" icon="style icon-4"></other-list>
                <other-list path="/aboutUs/login" title="加入众包" icon="style icon-5"></other-list>
            </div>
            <div class="about">
                <other-list path="/aboutUs/login" title="关于我们" icon="style icon-6"></other-list>

            </div>
        </section>

    </div>
</template>

<script>
    import HeadBack from '../routerView/headBack.vue';
    import otherList from './otherList/otherList.vue';
    export default({
        name: 'About',
        components:{
            'head-back':HeadBack,
            'other-list':otherList
        }
    })
</script>

<style>
    .aboutBody{
        width: 100%;
        height: 675px;
        background-color: #f3f3f3;
    }
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
        /*margin: 20px;*/
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
    .detail{
        display: table;
        width: 100%;
        height: 100px;
        background-color: #fff;
    }
    .detail .detail-1{
        width: 33.3333%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        /*border-bottom: 1px solid #0000fe;*/
    }
    .detail .detail-2{
        width: 1px;
        height: 100px;
        background-color: #f3f3f3;

    }
    .detail .detail-1 p{
        font-size: 14px;
    }
    .myself{
        margin-top: 20px;
        height: 100px;
        background-color: #fff;
    }
    .myself .line{
        width: 90%;
    }
    .server{
        margin-top: 15px;
        background-color: #fff;
    }
    .aboutBody section .about{
        background-color: #fff;
        margin-top: 15px;
    }
    .style{
        display: inline-block;
        width: 26px;
        height: 44px;
        vertical-align: -15px;
        background: url('../../img/pdj_2_sprites.png') no-repeat -191px -88px;
        background-size: 327px auto;
    }
    .style.icon-1{
        background-position: -191px -44px;
    }
    .style.icon-2{
        background-position: -191px -90px;
    }
    .style.icon-3{
        background-position: -191px -134px;
    }
    .style.icon-4{
        background-position: -102px -134px;
    }
    .style.icon-5{
        background-position: -191px -179px;
    }
    .style.icon-6{
        background-position: -190px -223px;
    }



</style>