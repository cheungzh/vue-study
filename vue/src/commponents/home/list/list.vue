<template>
    <div class="list-head">
        <img :src="src" alt="">
        <p>{{label}}</p>
        <slot></slot>
    </div>
</template>
<style>
    .list-head{
        text-align: center;
        width: 25%;
        float: left;
    }
    img{
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
