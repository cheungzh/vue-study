<template>
    <div>
        <div>
            <header class="home-location">
                <location></location>
            </header>
            <advertise></advertise>
            <div class="life clearFix">
                <!--<list v-for="item in lifeType" :label="item.text" :src="item.src" class=""></list>-->
                <list label="超市" src="/src/img/56bbf69bNeb305b26.png"></list>
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
            <div>
                <img src="/src/img/57067e11N70a1d6fd.jpg" alt="" class="homeImg">
            </div>
            <div class="clearFix offer">
                <offer v-for="item in offer" :key="item.id" :title="item.text" :discounted="item.discounted"
                       :src="item.src" text="offer-text" head="offer-head" desc="offer-title" disc="offer-disc"
                       img="offer-img"></offer>
            </div>
            <div>
                <img src="/src/img/56f1efffN4580dc2d.jpg" alt="" class="homeImg">
            </div>
            <div class="clearFix dico">
                <offer v-for="item in discount" :key="item.id" :path="item.path" :title="item.text"
                       :discounted="item.discounted" :src="item.src" text="dico-text" head="dico-head" desc="dico-title"
                       disc="dico-disc" img="offer-img"></offer>
            </div>
        </div>
    </div>


</template>

<script>
    import List from './list/list.vue'
    import Advertise from './advertise/advertise.vue'
    import Location from './location/location.vue'
    import Offer from './offer/offer.vue'
    export default({
        name: 'Home',
        components: {
            'list': List,
            'advertise': Advertise,
            'location': Location,
            'offer': Offer
        },
        data(){
            return {
                home:true,
                lifeType: [
                    {text: '超市', src: '/src/img/56bbf69bNeb305b26.png'},
                    {text: '生鲜', src: '/src/img/56bbf6aeN9e8d8ca7.jpg'},
                    {text: '外卖美食', src: '/src/img/56bbf6c0N9756ffa0.png'},
                    {text: '鲜花蛋糕', src: 'src/img/56bbf6cdNa4b44de8.png'},
                    {text: '医药健康', src: '/src/img/56bbf6d8N8ebb3a30.png'},
                    {text: '家政', src: '/src/img/56bbf6e5Nf6111663.png'},
                    {text: '洗衣', src: '/src/img/56bbf6faN839e4a3b.png'},
                    {text: '按摩美业', src: '/src/img/56bbf707N254c354a.png'}
                ],
                offer: [
                    {text: '永辉超市', discounted: '新鲜绿色', src: '/src/img/56f53097Nbfbe2abd.png'},
                    {text: '一元起购', discounted: '全场8折', src: '/src/img/56f26150N3a063bfe.png'},
                    {text: '滴露品牌', discounted: '限时一元抢', src: '/src/img/57064a70Ndd1d3e29.png'},
                    {text: '鲜家精品', discounted: '超值满减中', src: '/src/img/56fc8578N5a4c5dce.png'},
                ],
                discount: [
                    {text: '新客福利', discounted: '立减5元起', src: '/src/img/57069272N56be2185.png', path: '/home/new'},
                    {text: '热卖商品', discounted: '低至7折', src: '/src/img/570692aaN71baf125.png', path: '/home/other'},
                    {text: '品牌推荐', discounted: '大牌特卖', src: '/src/img/570692daNdbc625aa.png', path: '/home/new'},
                    {text: '新店速递', discounted: '限时满减', src: '/src/img/570692f7Ne9806435.png', path: '/home/new'},
                    {text: '果多美', discounted: '8折天天有', src: '/src/img/5704d900N68331cfe.png', path: '/home/new'},
                    {text: '药圣堂', discounted: '全场满减', src: '/src/img/570674d4N0e3a4281.png', path: '/home/new'},
                    {text: '仙家爆品', discounted: '9.9专区', src: '/src/img/56f1f0ccN796a42c8.png', path: '/home/new'},
                    {text: '鲜果8折', discounted: '满45-3', src: '/src/img/570545f3N54f984c9.png', path: '/home/new'},
                    {text: '乐天超市', discounted: '8折起', src: '/src/img/56fce3e9N88f98689.png', path: '/home/new'}
                ]
            }
        },
        method:{
            viewPo:function(path){
                console.log(path);
            }
        }
    })
</script>

<style>
    .home-location{
        margin-top: 20px;
    }
    .life {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .homeImg {
        width: 100%;
        /*height: 100%;*/
    }

    .offer {
        margin-bottom: 20px;
    }

    .offer-head {
        width: 45%;
        height: 70px;
        background-color: #e8e8e8;
        float: left;
        margin: 10px 0 0 10px;
        text-align: center;
    }

    .offer-text {
        float: left;
        margin-left: 10px;
        margin-top: 14px;
    }

    .offer-title {
        font-size: 16px;
        color: #008000;
    }

    .offer-disc {
        font-size: 14px;
        color: #999;
    }

    .offer-img {
        width: 60px;
        height: 60px;
        padding: 5px 0;
    }

    .dico {
        width: 90%;
        margin: 20px auto 60px;
    }

    .dico-head {
        width: 30%;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
    }

    .dico-title {
        color: #000000;
    }

    .dico-disc {
        font-size: 14px;
        color: #333;
    }
</style>