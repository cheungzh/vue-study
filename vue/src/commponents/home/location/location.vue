<template>
    <div class="main-head">
        <div class="location">
            <!--<i class="i1"></i>-->
            <span class="position" @click="selectLocation">位置 <i v-if="search==0" class="i2"></i><i v-if="search==1">&and;</i></span>
            <!--<i class="i2" @click="selectLocation"></i>-->
        </div>
        <a href="javascript:;" class="i3"></a>
        <ul class="location-ul" v-if="search==1">
            <li v-for="item in province">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default({
        name:'Location',
        data(){
          return {
              show:false,
              search:0,
              province:['浙江','福建','江西','重庆']
          }
        },
        methods:{
            selectLocation:function(){
                if(this.search==0){
                    this.search=1;
                }else{
                    this.search=0
                }
            }
        }
    })

</script>

<style>
    .main-head{
        position: relative;
    }

    .location{
        /*text-align: center;*/
    }
    .position{
        margin-left: 10px;
    }
    .i1{
        width: 20px;
        height: 30px;
        display: inline-block;
        background: url("../../../img/index_spirite.png") no-repeat 0 -48px/20px 120px;
    }
    .i2{
        width: 20px;
        height: 30px;
        display: inline-block;
        background: url("../../../img/index_spirite.png") no-repeat 0 -78px/20px 120px;
    }
    .i3{
        width: 30px;
        height: 30px;
        display: inline-block;
        background: url("../../../img/index_spirite.png") no-repeat 0 0/20px 120px;
        position: absolute;
        top:10px;
        right: 10px;
    }
    .main-head .location-ul{
        width: 100%;
        background-color: #cacaca;
        position: absolute;
        margin-top: 20px;
        z-index: 999;
    }
    .main-head ul li{
        width: 27%;
        height: 30px;
        line-height: 30px;
        background-color: #888888;
        text-align: center;
        margin-top: 10px;
    }
    .main-head ul li:nth-child(3n+1){
        margin-left: 22px;
    }
    .main-head ul li:last-child{
        margin-bottom: 10px;
    }
</style>
