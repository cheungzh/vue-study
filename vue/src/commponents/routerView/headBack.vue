<template>
    <div>
        <div class="mine">
            <router-link :to="{path:path}">
                <span class="back"><</span>
            </router-link>
            <span>{{title}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name:'HeadBack',
        props:['title','path']
    }
</script>

<style>
    .mine{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        background-color: #0097ff;
        padding: 10px;
    }
    .mine span {
        color: #fff;
        font-weight: 700;
    }
    .mine .back {
        float: left;
        margin-left: 10px;
    }
</style>
