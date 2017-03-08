<template>
    <div>
        <router-link :to="{path:path}">
            <div :class="head">
                <div :class="text">
                    <p :class="desc">{{title}}</p>
                    <span :class="disc">{{discounted}}</span>
                </div>
                <img :src="src" alt="" :class="img">
            </div>
        </router-link>
    </div>

</template>
<style>

</style>
<script>
    export default({
        name: 'Offer',
        props: ['src', 'title', 'discounted', 'class', 'head', 'disc', 'desc', 'img', 'text', 'path']
    })
</script>
