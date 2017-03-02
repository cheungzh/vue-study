<template>
    <div>
        <select :name="name" :id="id">
            <option v-for="item in options"  :value="item.value">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
//    export default({
//        name:'Select',
//        props:{
//          options:{
//              default:''
//          }
//        },
//        props:['options','name','id','class'],
//        data(){
//            return {
//                message:3
//            }
//        }
//    })

</script>

<style>

</style>
