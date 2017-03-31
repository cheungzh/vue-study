<template>
    <div class="loginBody">
        <head-back path="/aboutUs" :title="title">
            <span class="loginType" @click="changeLogin">{{loginType}}</span>
        </head-back>
        <div class="loginIn" v-if="loginType=='密码登陆'">
            <input type="text" placeholder="手机号" v-model="mobileNum">
            <div class="line"></div>
            <input type="text" placeholder="验证码">
            <div class="code activeCode" @click="codeSend" v-if="mobile">获取验证码</div>
            <div class="code" v-if="!mobile">获取验证码</div>
        </div>
        <div class="loginIn" v-else>
            <input type="text" placeholder="手机/邮箱/用户名">
            <div class="line"></div>
            <input type="text" placeholder="密码">
        </div>
        <div class="confirmLogin">
            登陆
        </div>
    </div>
</template>

<script>
    import HeadBack from '../../routerView/headBack.vue';
    export default({
        name:"login",
        data(){
            return {
                loginType:'密码登陆',
                title:'登陆',
                mobileNum:""
            }
        },
        components:{
            "head-back":HeadBack
        },
        computed:{
          mobile:function(){
              const _this=this;
              const reg=/^(13|14|15|18)[0-9]{9}$/;
              return reg.test(_this.mobileNum);
          }
        },
        methods:{
            changeLogin:function(){
                if(this.loginType=="密码登陆"){
                    this.title='密码登陆';
                    this.loginType='短信登陆';
                }else{
                    this.title='登陆';
                    this.loginType='密码登陆';
                }

            },
            codeSend:function(){
                let code='';
                for(let i=0;i<4;i++){
                    code+=Math.floor(Math.random()*10);
                };
            }
        }
    })
</script>

<style>
    .loginBody{
        height: 675px;
        background-color: #f3f3f3;
    }
    .loginType{
        font-size: 16px;
        float: right;
        margin-right: 10px;
    }
    .line{
        height: 1px;
        background-color: #f3f3f3;
    }
    .loginBody .loginIn{
        margin-top: 15px;
        width: 100%;
        background-color: #fff;
        text-align: center;
        position: relative;
    }
    .loginBody .loginIn input{
        width: 95%;
        border: none;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        font-weight: normal;
    }
    .loginIn .code{
        width: 100px;
        height: 36px;
        line-height: 36px;
        background-color: #ccc;
        color: #fff;
        position: absolute;
        top: 7px;
        right: 10px;
        border-radius: 5px;
    }
    .loginIn .activeCode{
        background-color: #3190e8;
    }
    .confirmLogin{
        width: 90%;
        font-size: 18px;
        color: #fff;
        text-align: center;
        background-color: #4cd964;
        height: 50px;
        line-height: 50px;
        margin: 20px auto;
        border-radius: 5px;
    }
</style>
