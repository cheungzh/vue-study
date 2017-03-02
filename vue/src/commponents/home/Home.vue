<template>
    <div>
        <location></location>
        <advertise></advertise>
        <div class="life clearFix">
            <list label="超市" src="/src/img/56bbf69bNeb305b26.png" class=""></list>
            <list label="生鲜" src="/src/img/56bbf6aeN9e8d8ca7.jpg"></list>
            <list label="外卖美食" src="/src/img/56bbf6c0N9756ffa0.png"></list>
            <list label="鲜花蛋糕" src="/src/img/56bbf6cdNa4b44de8.png"></list>
        </div>
        <div class="life clearFix">
            <list label="医药健康" src="/src/img/56bbf6d8N8ebb3a30.png"></list>
            <list label="家政" src="/src/img/56bbf6e5Nf6111663.png"></list>
            <list label="洗衣" src="/src/img/56bbf6faN839e4a3b.png"></list>
            <list label="按摩美业" src="/src/img/56bbf707N254c354a.png"></list>
        </div>

    </div>
</template>

<script>
    import List from './list/list.vue'
    import Advertise from './advertise/advertise.vue'
    import Location from './location/location.vue'
    export default({
        name:'Home',
        components:{
            'list':List,
            'advertise':Advertise,
            'location':Location
        }
    })
</script>

<style>
    .life{
        margin-top: 20px;
    }
</style>