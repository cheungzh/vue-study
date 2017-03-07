<template>
    <div class="main-head clearFix">
        <div class="location">
            <span class="position" @click="selectLocation"> <span v-if="location.name=='全部'">{{city}}</span><span v-if="location.name!='全部'">{{location.name}}</span> <i v-if="search==false" class="">&or;</i><i
                    v-if="search==true">&and;</i></span>
        </div>
        <div class="search">
            <input type="search" placeholder="请输入商家、品类、商圈" class="searchInput">
            <a href="javascript:;" class="i3"></a>
        </div>
        <ul class="location-ul" v-if="search==true">
            <li v-for="item in country" @click="selectCountry(item)" :class="[(item.name==location.name)?'activeCity':'']">{{item.name}}</li>
            <p class="nowCity">&nbsp;&nbsp;&nbsp;当前城市: {{city}}<a href="javascript:;" @click="changeDetail">更换&nbsp;&gt;</a></p>
        </ul>
        <ul class="detail-ul" v-if="changeCity==true">
            <input type="text" v-model="value" @keyup="searchCity(value)" placeholder="城市/行政区">
            <p v-if="province.length==0">抱歉,未找到相关位置,可修改后重试</p>
            <li v-for="item in province" @click="chooseCity(item)">{{item.name}}</li>
            <a href="javascript:;" class="close" @click="close">X</a>
        </ul>
    </div>
</template>

<script>
    export default({
        name: 'Location',
        data(){
            return {
                show: false,
                search: false,
                changeCity:false,
                location: {id:0,name:'全部'},
                city:'杭州',
                country:[{id:1,name:'全部'}, {id:11,name:'江干'},{id:12,name:'西湖'},{id:13,name:'上城'},{id:14,name:'下城'},{id:15,name:'滨江'}],
                province: [],
                defaultProvince:[]

            }
        },
        computed: {

        },
        created:function(){
            this.defaultProvince=[
                {code:0,name:'北京',country:[{id:0,name:'全部'},{id:1,name:'东城区'},{id:2,name:'西城区'},{id:3,name:'朝阳区'},{id:4,name:'丰台区'},{id:5,name:'海淀区'},{id:6,name:'昌平区'}]},
                {code:1,name:'杭州',country:[{id:0,name:'全部'},{id:11,name:'江干'},{id:12,name:'西湖'},{id:13,name:'上城'},{id:14,name:'下城'},{id:15,name:'滨江'}]},
                {code:2,name:'上海'},
                {code:3,name:'南京'},
                {code:4,name:'重庆'},
                {code:5,name:'四川'},
                {code:6,name:'泉州'}
            ];
            this.province=this.defaultProvince;
        },
        methods: {
            selectLocation: function () {
                this.search = !this.search;
            },
            //选择区域
            selectCountry: function (item) {
                this.location = item;
                this.search = !this.search;
            },
            changeDetail:function(){
                this.changeCity=!this.changeCity;
                this.search = !this.search;
            },
            //选择城市
            chooseCity:function(item){
                this.changeCity=!this.changeCity;
                //获取地区
                this.country=item.country;
                this.city=item.name;
                //切换城市地址初始化
                this.location={};
                this.location.id=0;
                this.location.name='全部';
            },
            //手动搜索城市
            searchCity:function(value){
                const province=this.defaultProvince.filter(function(item){
                    if(value.trim().length==0){
                        return item;
                    }
                    return item.name==value.trim()
                });
                this.province=province;
            },
            //关闭城市列表
            close:function(){
                this.changeCity=!this.changeCity;
            }
        }
    })

</script>

<style>
    .main-head {
        position: relative;
    }

    .location {
        float: left;
        margin-left: 20px;
        /*text-align: center;*/
    }

    .position {
        margin-left: 10px;
    }

    .search {
        width: 200px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid gainsboro;
        float: left;
        margin-left: 30%;
        position: absolute;
    }

    .searchInput {
        width: 180px;
        border: none;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        margin: 0 auto;
    }

    .i3 {
        width: 30px;
        height: 30px;
        display: inline-block;
        background: url("../../../img/index_spirite.png") no-repeat 0 0/20px 120px;
        position: absolute;
        top: 2px;
        right: -40px;
    }

    .main-head .location-ul {
        width: 100%;
        background-color: #dbdbdb;
        position: absolute;
        top: 30px;
        z-index: 990;
    }

    .main-head .location-ul li {
        width: 27%;
        height: 30px;
        line-height: 30px;
        background-color: #f4f4f4;
        text-align: center;
        margin-top: 10px;
    }

    .main-head .location-ul li.activeCity {
        background-color: #9a9a9a;
    }

    .main-head .location-ul li:nth-child(3n+1) {
        margin-left: 22px;
    }

    .main-head .location-ul li:last-child {
        margin-bottom: 10px;
    }
    .main-head .detail-ul {
        width: 100%;
        min-height: 90px;
        max-height: 300px;
        overflow: auto;
        background-color: #efefef;
        position: absolute;
        top: 0;
        z-index: 999;

    }
    .detail-ul p{
        text-align: center;
    }
    .main-head .detail-ul li{
        display: block;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #333;
    }

    .nowCity {
        width: 90%;
        height: 30px;
        line-height: 30px;
        margin: 20px auto;
        background-color: #ffffff;
    }
    .detail-ul input{
        width: 60%;
        height: 30px;
        font-size: 16px;
        display: block;
        line-height: 30px;
        margin: 10px auto;
        border: none;
        border-radius: 6px;
    }
    .detail-ul .close{
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background-color: #ff97a2;
        font-size: 20px;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .location-ul .nowCity a {
        float: right;
        margin-right: 30px;
        color: #006400;
    }
</style>
