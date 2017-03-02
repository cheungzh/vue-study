<template>
    <div class="clearFix advertise">
        <img v-for="(items,key) in arr" :src="items.src" alt="" :key="key" class="adver-img" v-if="index==key+1" >
        <div class="clearFix">
            <ul>
                <li class="point"  v-for="i in 6" :key="i" v-on:click="changeBanner(i)" :class="[index==i?activePoint:'']"></li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default({
        name:'Advertise',
        data(){
            return {
                count:true,
                index:1,
                activePoint:'activePoint',
                arr:[
                        {src:'/src/img/570631f3Nf01957ff.jpg'},
                        {src:'/src/img/570521f3Nbbc2c7d3.jpg'},
                        {src:'/src/img/5704e4f8Na1a49a23.jpg'},
                        {src:'/src/img/5703f45fN3a463736.jpg'},
                        {src:'/src/img/56fe0b90Na4fa5452.jpg'},
                        {src:'/src/img/56dfee6aN95e898b2.jpg'},
                ]
            }
        },
        created:function(){
            const _this=this;
             _this.timer=setInterval(function(){
                _this.index+=1;
                if(_this.index>6){
                    _this.index=1;
                }
            },3000)
        },
        destroyed:function(){
        },
        deactivated:function(){
            const _this=this;
            clearInterval(_this.timer);

        },
        methods:{
            changeBanner:function(index){
                this.index=index;
///               this.$emit("changeBanner");
            }
        }


    })
</script>

<style>
    .advertise{
        position: relative;
        margin-top: 20px;
    }
    .advertise .clearFix{
        position: absolute;
        bottom: 10px;
        right: 40%;
    }
    .point{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #cacaca;
        float: left;
        margin-left: 5px;
    }
    .activePoint{
        background-color: #008000;
    }
    .adver-img{
        width: 100%;
    }
</style>

