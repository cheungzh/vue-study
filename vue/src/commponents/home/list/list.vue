<template>
    <div class="list-head">
        <slot></slot>
        <img :src="src" alt="" class="list-img">
        <p>{{label}}</p>
    </div>
</template>
<style>
    .list-head{
        text-align: center;
        width: 25%;
        float: left;
    }
    .list-img{
        width: 50px;
        height: 50px;
    }
</style>
<script>

    export default{
        name:'List',
        props:['src','label','alt'],
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
