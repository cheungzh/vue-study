<template>
    <router-link :to="{path:path}">
        <div class="otherList clearFix">
            <span :class="icon"></span>
            <span class="title">{{title}}</span>
            <span class="turnTo">></span>
        </div>
    </router-link>

</template>

<script>
    export default{
        name: '',
        data(){
            return {
                msg: 'hello vue'
            }
        },
        props: ['path', 'title', 'icon'],
        components: {}
    }
</script>

<style>
    .otherList {
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        width: 95%;
        border-bottom: 1px solid #f3f3f3;
        margin-left: 5%;
    }

    .turnTo {
        float: right;
        margin-right: 30px;
        font-size: 18px;
    }

    .otherList .title {
        font-size: 16px;
    }
</style>
